import type { EModuleName } from "@/lib/modules";

import { z } from "zod";

import {
  colorNames,
  EColorNames,
  EFontNames,
  ESocialNames,
  fontNames,
} from "@/lib/customize-options";
import { featureNames, moduleFeatures } from "@/lib/features";
import { moduleNames } from "@/lib/modules";

export const createProjectSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(20, { message: "Name must be at most 20 characters long." })
    .regex(/^[\d A-Za-z-]+$/, {
      message: "Name must contain only letters, numbers, hyphens, and spaces.",
    }),
  chainId: z
    .number({ message: "Selecting a chain is required." })
    .positive("Chain ID must be at least 1."),
  contracts: z
    .record(z.enum(moduleNames), z.set(z.enum(featureNames)))
    .refine((value) => Object.keys(value).length > 0, {
      message: "You must select at least one contract module for your project.",
    })
    .refine(
      (value) => {
        for (const [moduleName, featureNames] of Object.entries(value)) {
          const requiredFeatureNames = new Set(
            moduleFeatures[moduleName as EModuleName]
              .filter((f) => f.required)
              .map((f) => f.name),
          );
          if (![...featureNames].some((f) => requiredFeatureNames.has(f)))
            return false;
        }
        return true;
      },
      {
        message: "You must select the base feature for the selected module.",
      },
    ),
  dapp: z
    .object({
      colorOption: z.enum(colorNames).default(EColorNames.Brass),
      fontOption: z.enum(fontNames).default(EFontNames.Jakarta),
      socialOption: z.object({
        [ESocialNames.Facebook]: z.string().url().optional(),
        [ESocialNames.X]: z.string().url().optional(),
        [ESocialNames.Discord]: z.string().url().optional(),
        [ESocialNames.Github]: z.string().url().optional(),
        [ESocialNames.Instagram]: z.string().url().optional(),
      }),
    })
    .optional(),
});

export const tokenProjectSchema = z.object({
  projectName: z.string(),
  projectDescription: z.string(),
});
