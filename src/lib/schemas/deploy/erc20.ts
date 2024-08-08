import type { useForm } from 'react-hook-form';

import { z } from 'zod';

import { EFeatureName } from '@/lib/features';
import { zAddress, zBigInt } from '@/lib/types/zod';

export const erc20DeploySchema = z.object({
  baseArgs: z.object({
    name: z
      .string({ required_error: 'Name is required' })
      .min(1, { message: 'Name must be at least 1 character' })
      .max(20, { message: 'Name must be less than 20 characters' }),
    symbol: z
      .string({ required_error: 'Symbol is required' })
      .min(1, { message: 'Symbol must be at least 1 character' })
      .max(10, { message: 'Symbol must be less than 10 characters' })
      .refine((value) => value === value.toUpperCase(), {
        message: 'Symbol must be uppercase'
      })
  }),
  ownableArgs: z.object({ initialOwner: zAddress }).optional(),
  cappedArgs: z.object({ cap: zBigInt }).optional(),
  premintArgs: z.object({ premintAmount: zBigInt }).optional(),
  taxableArgs: z
    .object({
      taxCollector: zAddress,
      taxRate: z.string().refine(
        (value) => {
          const rate = Number.parseInt(value);
          return rate > 0 && rate < 100;
        },
        { message: 'Tax rate must be a number between 0 and 100' }
      )
    })
    .optional()
});

export type TERC20DeploySchema = z.infer<typeof erc20DeploySchema>;

export const getERC20ReviewSections = (
  form: ReturnType<typeof useForm<z.infer<typeof erc20DeploySchema>>>,
  featureNames: EFeatureName[]
) => {
  if (!form.formState.isValid) return [];

  const formValues = form.getValues();
  return [
    {
      feature: EFeatureName.ERC20_BASE,
      values: { ...formValues.baseArgs }
    },
    {
      feature: EFeatureName.ACCESS_OWNABLE,
      values: { ...formValues.ownableArgs }
    },
    {
      feature: EFeatureName.ERC20_CAPPED,
      values: { ...formValues.cappedArgs }
    },
    {
      feature: EFeatureName.ERC20_PREMINT,
      values: { ...formValues.premintArgs }
    },
    {
      feature: EFeatureName.ERC20_TAXABLE,
      values: { ...formValues.taxableArgs }
    }
  ].filter((section) => featureNames.includes(section.feature));
};

export const getERC20FormFields = (featureNames: EFeatureName[]) => {
  return [
    {
      feature: EFeatureName.ERC20_BASE,
      fields: 'baseArgs'
    },
    {
      feature: EFeatureName.ACCESS_OWNABLE,
      fields: 'ownableArgs'
    },
    {
      feature: EFeatureName.ERC20_CAPPED,
      fields: 'cappedArgs'
    },
    {
      feature: EFeatureName.ERC20_PREMINT,
      fields: 'premintArgs'
    }
  ]
    .filter((section) => featureNames.includes(section.feature))
    .map((section) => section.fields) as (keyof TERC20DeploySchema)[];
};
