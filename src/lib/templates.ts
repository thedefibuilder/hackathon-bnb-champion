/* eslint-disable sonarjs/no-duplicate-string */
import { EFeatureName } from './features';
import { EModuleName } from './modules';

export type TTemplate = {
  name: ETemplateName;
  description: string;
  image: string;
  isPro?: boolean;
  contracts: {
    moduleName: EModuleName;
    featureNames: EFeatureName[];
  }[];
};

export enum ETemplateName {
  DEFLATIONARY_TOKEN = 'Deflationary Token',
  GOVERNANCE_TOKEN = 'Governance Token',
  TOKEN_PUBLIC_PRESALE = 'Token Public Presale',
  TOKEN_PRIVATE_PRESALE = 'Token Private Presale',
  CUSTOM_TEMPLATE = 'Custom Template'
}

export const templates: TTemplate[] = [
  {
    name: ETemplateName.DEFLATIONARY_TOKEN,
    description: 'Create a deflationary token that decreses its total supply when burned.',
    image: '/governance-token.png',
    contracts: [
      {
        moduleName: EModuleName.TOKEN,
        featureNames: [
          EFeatureName.ERC20_BASE,
          EFeatureName.ERC20_BURNABLE,
          EFeatureName.ERC20_PREMINT,
          EFeatureName.ERC20_PERMIT
        ]
      }
    ]
  },
  {
    name: ETemplateName.GOVERNANCE_TOKEN,
    description: 'Create a governance token that allows holders to vote on proposals.',
    image: '/public-token-presale.png',
    isPro: true,
    contracts: [
      {
        moduleName: EModuleName.TOKEN,
        featureNames: [
          EFeatureName.ERC20_BASE,
          EFeatureName.ACCESS_OWNABLE,
          EFeatureName.ERC20_PREMINT,
          EFeatureName.ERC20_VOTES,
          EFeatureName.ERC20_PERMIT,
          EFeatureName.ERC20_PAUSABLE,
          EFeatureName.ERC20_MINTABLE,
          EFeatureName.ERC20_CAPPED
        ]
      }
    ]
  },
  {
    name: ETemplateName.TOKEN_PUBLIC_PRESALE,
    description:
      'Create a token with a public presale round with total raise cap and individual min/max contribution limits.',
    image: '/deflationary-token.png',
    contracts: [
      {
        moduleName: EModuleName.TOKEN,
        featureNames: [
          EFeatureName.ERC20_BASE,
          EFeatureName.ERC20_PREMINT,
          EFeatureName.ACCESS_OWNABLE,
          EFeatureName.ERC20_MINTABLE,
          EFeatureName.ERC20_CAPPED,
          EFeatureName.ERC20_PAUSABLE
        ]
      },
      {
        moduleName: EModuleName.PRESALE,
        featureNames: [
          EFeatureName.PRESALE_BASE_NATIVE,
          EFeatureName.PRESALE_CAPPED,
          EFeatureName.PRESALE_CONTRIBUTION_LIMITS
        ]
      }
    ]
  },
  {
    name: ETemplateName.TOKEN_PRIVATE_PRESALE,
    description: 'Create a token with a private presale round with an allowlist and vested claims.',
    image: '/private-token-presale.png',
    isPro: true,
    contracts: [
      {
        moduleName: EModuleName.TOKEN,
        featureNames: [
          EFeatureName.ERC20_BASE,
          EFeatureName.ERC20_PREMINT,
          EFeatureName.ACCESS_OWNABLE,
          EFeatureName.ERC20_MINTABLE,
          EFeatureName.ERC20_CAPPED,
          EFeatureName.ERC20_PAUSABLE
        ]
      },
      {
        moduleName: EModuleName.PRESALE,
        featureNames: [
          EFeatureName.PRESALE_BASE_ERC20,
          EFeatureName.PRESALE_CAPPED,
          EFeatureName.PRESALE_CONTRIBUTION_LIMITS,
          EFeatureName.PRESALE_ALLOWLIST,
          EFeatureName.PRESALE_VESTED_CLAIMS
        ]
      }
    ]
  },
  {
    name: ETemplateName.CUSTOM_TEMPLATE,
    description: 'Choose the modules to create your dApp and launch your brand new idea today.',
    image: '/custom-template.svg',
    contracts: []
  }
];
