import { EFeatureName } from '@/lib/features';

export enum EERC20StepsName {
  base = 'Base',
  access = 'Access',
  capped = 'Capped',
  premint = 'Premint',
  taxable = 'Taxable',
  review = 'Review'
}

export enum EERC20StepsPath {
  base = 'base',
  access = 'access',
  capped = 'capped',
  premint = 'premint',
  taxable = 'taxable',
  review = 'review'
}

export type TERC20DeployRoute = {
  name: EERC20StepsName;
  path: EERC20StepsPath;
  feature?: EFeatureName;
};

export const erc20Routes: [...TERC20DeployRoute[], TERC20DeployRoute] = [
  {
    name: EERC20StepsName.base,
    feature: EFeatureName.ERC20_BASE,
    path: EERC20StepsPath.base
  },
  {
    name: EERC20StepsName.access,
    feature: EFeatureName.ACCESS_OWNABLE,
    path: EERC20StepsPath.access
  },
  {
    name: EERC20StepsName.capped,
    feature: EFeatureName.ERC20_CAPPED,
    path: EERC20StepsPath.capped
  },
  {
    name: EERC20StepsName.premint,
    feature: EFeatureName.ERC20_PREMINT,
    path: EERC20StepsPath.premint
  },
  {
    name: EERC20StepsName.taxable,
    feature: EFeatureName.ERC20_TAXABLE,
    path: EERC20StepsPath.taxable
  }
];

export const erc20ReviewStep: TERC20DeployRoute = {
  name: EERC20StepsName.review,
  path: EERC20StepsPath.review
};
