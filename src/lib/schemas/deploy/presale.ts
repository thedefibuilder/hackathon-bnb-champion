/* eslint-disable sonarjs/no-duplicate-string */
import type { useForm } from 'react-hook-form';

import { z } from 'zod';

import { EFeatureName } from '@/lib/features';
import { zAddress, zBigInt } from '@/lib/types/zod';

export const presaleDeploySchema = z.object({
  baseParams: z
    .object({
      offeringToken: zAddress,
      startTime: z
        .date()
        .refine((v) => v > new Date(), { message: 'Start time must be in the future' })
        .transform((v) => Math.floor(v.getTime() / 1000)),
      endTime: z
        .date()
        .refine((v) => v > new Date(), { message: 'End time must be in the future' })
        .transform((v) => Math.floor(v.getTime() / 1000)),
      raiseTarget: zBigInt,
      offeringAmount: zBigInt
    })
    .refine((v) => v.endTime > v.startTime, {
      message: 'End time must be after start time'
    }),
  erc20Params: z.object({ paymentToken: zAddress }).optional(),
  cappedParams: z.object({ raiseCap: zBigInt }).optional(),
  contributionLimitsParams: z
    .object({
      minContribution: zBigInt,
      maxContribution: zBigInt
    })
    .optional(),
  vestingParams: z
    .object({
      vestingDurationSeconds: z
        .string()
        .refine((v) => !Number.isNaN(Number(v)), { message: 'Invalid number of days' })
        .transform((v) => Number(v) * 24 * 60 * 60),
      cliffDurationSeconds: z
        .string()
        .refine((v) => !Number.isNaN(Number(v)), { message: 'Invalid number of days' })
        .transform((v) => Number(v) * 24 * 60 * 60)
    })
    .refine((v) => v.vestingDurationSeconds > v.cliffDurationSeconds, {
      message: 'Vesting duration must be greater than cliff duration'
    })
    .optional(),
  withFeeParams: z
    .object({
      feeAdmin: zAddress,
      fee: z.string().refine((v) => Number(v) >= 0 && Number(v) <= 10_000, {
        message: 'Fee must be between 0 and 10,000'
      })
    })
    .optional()
});

export type TPresaleDeploySchema = z.infer<typeof presaleDeploySchema>;

export const getPresaleReviewSections = (
  form: ReturnType<typeof useForm<z.infer<typeof presaleDeploySchema>>>,
  featureNames: EFeatureName[]
) => {
  if (!form.formState.isValid) return [];

  const formValues = form.getValues();

  return [
    {
      feature: EFeatureName.PRESALE_BASE_NATIVE,
      values: {
        offeringToken: formValues.baseParams.offeringToken,
        startTime: formValues.baseParams.startTime,
        endTime: formValues.baseParams.endTime,
        raiseTarget: formValues.baseParams.raiseTarget,
        offeringAmount: formValues.baseParams.offeringAmount
      }
    },
    {
      feature: EFeatureName.PRESALE_BASE_ERC20,
      values: {
        offeringToken: formValues.baseParams.offeringToken,
        startTime: formValues.baseParams.startTime,
        endTime: formValues.baseParams.endTime,
        raiseTarget: formValues.baseParams.raiseTarget,
        offeringAmount: formValues.baseParams.offeringAmount,
        paymentToken: formValues.erc20Params?.paymentToken
      }
    },
    {
      feature: EFeatureName.PRESALE_CONTRIBUTION_LIMITS,
      values: {
        minContribution: formValues.contributionLimitsParams?.minContribution,
        maxContribution: formValues.contributionLimitsParams?.maxContribution
      }
    },
    {
      feature: EFeatureName.PRESALE_VESTED_CLAIMS,
      values: {
        vestingDurationSeconds: formValues.vestingParams?.vestingDurationSeconds,
        cliffDurationSeconds: formValues.vestingParams?.cliffDurationSeconds
      }
    },
    {
      feature: EFeatureName.PRESALE_WITH_FEE,
      values: {
        feeAdmin: formValues.withFeeParams?.feeAdmin,
        fee: formValues.withFeeParams?.fee
      }
    },
    {
      feature: EFeatureName.PRESALE_CAPPED,
      values: {
        raiseCap: formValues.cappedParams?.raiseCap
      }
    }
  ].filter((section) => featureNames.includes(section.feature));
};

export const getPresaleFormFields = (featureNames: EFeatureName[]) => {
  return [
    {
      feature: EFeatureName.PRESALE_BASE_NATIVE,
      fields: 'baseParams'
    },
    {
      feature: EFeatureName.PRESALE_BASE_ERC20,
      fields: ['baseParams', 'erc20Params']
    },
    {
      feature: EFeatureName.PRESALE_CAPPED,
      fields: 'cappedParams'
    },
    {
      feature: EFeatureName.PRESALE_CONTRIBUTION_LIMITS,
      fields: 'contributionLimitsParams'
    },
    {
      feature: EFeatureName.PRESALE_VESTED_CLAIMS,
      fields: 'vestingParams'
    },
    {
      feature: EFeatureName.PRESALE_WITH_FEE,
      fields: 'withFeeParams'
    }
  ]
    .filter((section) => featureNames.includes(section.feature))
    .map((section) => section.fields) as (keyof TPresaleDeploySchema)[];
};
