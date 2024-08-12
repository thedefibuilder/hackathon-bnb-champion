import type { EFeatureName } from "@/lib/features";
import type { Abi, Hex } from "viem";

import { LlmService } from "@defibuilder/sdk";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { featureNames, getModuleSourceCode } from "@/lib/features";
import { moduleNames } from "@/lib/modules";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { generateArtifactKey } from "@/lib/utils/index";

export const contractRouter = createTRPCRouter({
  getFeatures: publicProcedure
    .input(z.object({ projectId: z.number(), moduleName: z.enum(moduleNames) }))
    .query(async ({ ctx, input }) => {
      const features = await ctx.db.contract.findUnique({
        where: {
          projectId_moduleName: {
            projectId: input.projectId,
            moduleName: input.moduleName,
          },
        },
        select: {
          featureNames: true,
        },
      });

      if (!features || features.featureNames.length === 0) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Features not found",
        });
      }

      return features.featureNames as EFeatureName[];
    }),

  getArtifacts: publicProcedure
    .input(
      z.object({
        moduleName: z.enum(moduleNames),
        featureNames: z.array(z.enum(featureNames)),
      }),
    )
    .query(async ({ ctx, input }) => {
      const artifactKey = generateArtifactKey(
        input.moduleName,
        input.featureNames,
      );
      const artifact = await ctx.db.artifact.findUnique({
        where: {
          key: artifactKey,
        },
      });
      if (artifact)
        return {
          abi: artifact.abi as unknown as Abi,
          bytecode: artifact.bytecode as Hex,
        };

      const source = await getModuleSourceCode(
        input.moduleName,
        input.featureNames,
      );
      const artifacts = await LlmService.buildCode(source);
      if (!artifacts.success) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: artifacts.message,
        });
      }

      await ctx.db.artifact.create({
        data: {
          key: artifactKey,
          abi: artifacts.artifact.abi,
          bytecode: artifacts.artifact.bytecode,
        },
      });

      return {
        abi: artifacts.artifact.abi as unknown as Abi,
        bytecode: artifacts.artifact.bytecode as Hex,
      };
    }),
});
