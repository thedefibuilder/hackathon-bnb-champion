import { EFeatureName } from '@/lib/features';

export enum EPresaleStepsName {
  baseERC20 = 'Presale ERC20',
  baseNative = 'Presale Native',
  capped = 'Capped',
  allowlist = 'Allowlist',
  contributionLimits = 'Contribution Limits',
  vestedClaims = 'Vested Claims',
  withFee = 'With Fee',
  review = 'Review'
}

export enum EPresaleStepsPath {
  baseERC20 = 'erc20',
  baseNative = 'native',
  capped = 'capped',
  allowlist = 'allowlist',
  contributionLimits = 'contribution-limits',
  vestedClaims = 'vested-claims',
  withFee = 'with-fee',
  review = 'review'
}

export type TPresaleDeployRoute = {
  name: EPresaleStepsName;
  path: EPresaleStepsPath;
  feature?: EFeatureName;
};

export const presaleRoutes: [...TPresaleDeployRoute[], TPresaleDeployRoute] = [
  {
    name: EPresaleStepsName.baseERC20,
    feature: EFeatureName.PRESALE_BASE_ERC20,
    path: EPresaleStepsPath.baseERC20
  },
  {
    name: EPresaleStepsName.baseNative,
    feature: EFeatureName.PRESALE_BASE_NATIVE,
    path: EPresaleStepsPath.baseNative
  },
  {
    name: EPresaleStepsName.capped,
    feature: EFeatureName.PRESALE_CAPPED,
    path: EPresaleStepsPath.capped
  },
  {
    name: EPresaleStepsName.contributionLimits,
    feature: EFeatureName.PRESALE_CONTRIBUTION_LIMITS,
    path: EPresaleStepsPath.contributionLimits
  },
  {
    name: EPresaleStepsName.vestedClaims,
    feature: EFeatureName.PRESALE_VESTED_CLAIMS,
    path: EPresaleStepsPath.vestedClaims
  },
  {
    name: EPresaleStepsName.withFee,
    feature: EFeatureName.PRESALE_WITH_FEE,
    path: EPresaleStepsPath.withFee
  }
];

export const presaleReviewStep: TPresaleDeployRoute = {
  name: EPresaleStepsName.review,
  path: EPresaleStepsPath.review
};
