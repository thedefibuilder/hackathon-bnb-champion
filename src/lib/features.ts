/* eslint-disable unicorn/no-array-reduce */
/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
import type { TERC20Options, TPresaleOptions } from "@defibuilder/sdk";
import type { LucideIcon } from "lucide-react";

import { ContractService, EPresaleBuyOptions } from "@defibuilder/sdk";
import {
  AlarmClockMinus,
  AlignEndHorizontal,
  BookUser,
  Coins,
  Droplet,
  Flame,
  GlassWater,
  HandCoins,
  LineChart,
  Pickaxe,
  PlaneTakeoff,
  TicketSlash,
  UserRound,
  Vote,
  Zap,
} from "lucide-react";

import { EModuleName } from "./modules";

export type TFeature = {
  name: EFeatureName;
  icon: LucideIcon;
  description: string;
  available?: boolean;
  required?: boolean;
  price?: number;
  isPro?: boolean;
  inclusiveSet?: EFeatureName[];
  exclusiveSet?: EFeatureName[];
};

export enum EFeatureName {
  ACCESS_OWNABLE = "Ownable",
  ERC20_BASE = "ERC20 Base",
  ERC20_MINTABLE = "Mintable",
  ERC20_PREMINT = "Premint",
  ERC20_BURNABLE = "Burnable",
  ERC20_PAUSABLE = "Pausable",
  ERC20_PERMIT = "Permit",
  ERC20_VOTES = "Votes",
  ERC20_CAPPED = "Capped",
  ERC20_FLASH_MINT = "Flash Mint",
  ERC20_TAXABLE = "Taxable",
  PRESALE_BASE_ERC20 = "Presale ERC20 Base",
  PRESALE_BASE_NATIVE = "Presale Native Base",
  PRESALE_ALLOWLIST = "Allowlist",
  PRESALE_CAPPED = "Capped",
  PRESALE_CONTRIBUTION_LIMITS = "Contribution Limits",
  PRESALE_VESTED_CLAIMS = "Vested Claims",
  PRESALE_WITH_FEE = "With Fee",
}

export const featureNames = Object.values(EFeatureName) as [
  EFeatureName,
  ...EFeatureName[],
];

const features = {
  [EModuleName.TOKEN]: {
    [EFeatureName.ERC20_BASE]: {
      name: EFeatureName.ERC20_BASE,
      icon: Coins,
      price: 0,
      available: true,
      required: true,
      description: "Create a fungible token compliant with ERC20 standard.",
    },
    [EFeatureName.ACCESS_OWNABLE]: {
      name: EFeatureName.ACCESS_OWNABLE,
      icon: UserRound,
      price: 0,
      available: true,
      description: "Add an admin to the token contract for access control.",
      exclusiveSet: [
        EFeatureName.ERC20_MINTABLE,
        EFeatureName.ERC20_PAUSABLE,
        EFeatureName.ERC20_CAPPED,
      ],
    },
    [EFeatureName.ERC20_PREMINT]: {
      name: EFeatureName.ERC20_PREMINT,
      icon: PlaneTakeoff,
      price: 0,
      available: true,
      description: "Mint an amount of tokens at token deployment.",
    },
    [EFeatureName.ERC20_MINTABLE]: {
      name: EFeatureName.ERC20_MINTABLE,
      icon: Pickaxe,
      price: 0,
      available: true,
      description: "Allow an admin to mint new tokens after deployment.",
      inclusiveSet: [EFeatureName.ACCESS_OWNABLE],
      exclusiveSet: [EFeatureName.ERC20_CAPPED],
    },
    [EFeatureName.ERC20_BURNABLE]: {
      name: EFeatureName.ERC20_BURNABLE,
      icon: Flame,
      price: 0,
      available: true,
      description:
        "Allow token holders to burn tokens and decrease total supply.",
    },
    [EFeatureName.ERC20_PAUSABLE]: {
      name: EFeatureName.ERC20_PAUSABLE,
      icon: AlarmClockMinus,
      available: true,
      price: 9.99,
      description: "Allow an admin to pause the token contract.",
      inclusiveSet: [EFeatureName.ACCESS_OWNABLE],
    },
    [EFeatureName.ERC20_PERMIT]: {
      name: EFeatureName.ERC20_PERMIT,
      icon: HandCoins,
      available: true,
      price: 9.99,
      description: "Allow token holders sign gasless approvals.",
      exclusiveSet: [EFeatureName.ERC20_VOTES],
    },
    [EFeatureName.ERC20_CAPPED]: {
      name: EFeatureName.ERC20_CAPPED,
      icon: GlassWater,
      available: true,
      price: 9.99,
      description: "Set a cap on the total supply of the token.",
      inclusiveSet: [EFeatureName.ERC20_MINTABLE, EFeatureName.ACCESS_OWNABLE],
    },
    [EFeatureName.ERC20_VOTES]: {
      name: EFeatureName.ERC20_VOTES,
      icon: Vote,
      available: true,
      price: 19.99,
      isPro: true,
      description:
        "Add voting capabilities to the token. Requires permit dependency.",
      inclusiveSet: [EFeatureName.ERC20_PERMIT],
    },
    [EFeatureName.ERC20_FLASH_MINT]: {
      name: EFeatureName.ERC20_FLASH_MINT,
      icon: Zap,
      available: true,
      price: 29.99,
      isPro: true,
      description: "Allow anyone to flash mint tokens.",
    },
    [EFeatureName.ERC20_TAXABLE]: {
      name: EFeatureName.ERC20_TAXABLE,
      icon: HandCoins,
      available: true,
      price: 29.99,
      isPro: true,
      description: "Take a tax fee on each token transfer.",
    },
  },
  [EModuleName.PRESALE]: {
    [EFeatureName.PRESALE_BASE_ERC20]: {
      name: EFeatureName.PRESALE_BASE_ERC20,
      icon: Coins,
      available: true,
      required: true,
      price: 19.99,
      description: "Create a presale with an ERC20 token as payment option.",
      exclusiveSet: [EFeatureName.PRESALE_BASE_NATIVE],
    },
    [EFeatureName.PRESALE_BASE_NATIVE]: {
      name: EFeatureName.PRESALE_BASE_NATIVE,
      icon: Droplet,
      available: true,
      required: true,
      price: 19.99,
      description: "Create a presale with native token as payment option.",
      exclusiveSet: [EFeatureName.PRESALE_BASE_ERC20],
    },
    [EFeatureName.PRESALE_ALLOWLIST]: {
      name: EFeatureName.PRESALE_ALLOWLIST,
      icon: BookUser,
      available: true,
      price: 19.99,
      description:
        "Allow only whitelisted addresses to participate in the presale.",
    },
    [EFeatureName.PRESALE_CAPPED]: {
      name: EFeatureName.PRESALE_CAPPED,
      icon: GlassWater,
      available: true,
      price: 19.99,
      description: "Set a hard cap on the total amount of tokens sold.",
    },
    [EFeatureName.PRESALE_CONTRIBUTION_LIMITS]: {
      name: EFeatureName.PRESALE_CONTRIBUTION_LIMITS,
      icon: AlignEndHorizontal,
      available: true,
      price: 19.99,
      description: "Set minimum and maximum contribution limits.",
    },
    [EFeatureName.PRESALE_VESTED_CLAIMS]: {
      name: EFeatureName.PRESALE_VESTED_CLAIMS,
      icon: LineChart,
      available: true,
      price: 29.99,
      isPro: true,
      description:
        "Vest claimed tokens to participants with an optional cliff period.",
    },
    [EFeatureName.PRESALE_WITH_FEE]: {
      name: EFeatureName.PRESALE_WITH_FEE,
      icon: TicketSlash,
      available: true,
      price: 59.99,
      isPro: true,
      description: "Charge a fee on contributions.",
    },
  },
};

export const moduleFeatures: Record<EModuleName, TFeature[]> = {
  [EModuleName.TOKEN]: Object.values(features[EModuleName.TOKEN]),
  [EModuleName.PRESALE]: Object.values(features[EModuleName.PRESALE]),
  [EModuleName.NFT]: [],
  [EModuleName.EDITION]: [],
  [EModuleName.LAUNCHPAD]: [],
  [EModuleName.EXCHANGE]: [],
};

export const getModuleFeatureConfig = (
  module: EModuleName,
  feature: EFeatureName,
) => moduleFeatures[module].find((f) => f.name === feature);

export const calculateTotalPrice = (
  contracts: Partial<Record<EModuleName, Set<EFeatureName>>>,
) =>
  Object.entries(contracts).reduce((total, contract) => {
    const contractPrice = [...contract[1]].reduce((acc, feature) => {
      const featureConfig = getModuleFeatureConfig(
        contract[0] as EModuleName,
        feature,
      );
      return acc + (featureConfig?.price ?? 0);
    }, 0);
    return total + contractPrice;
  }, 0);

export const featuresToOptionsERC20 = (featureNames: EFeatureName[]) => {
  return {
    burnable: featureNames.includes(EFeatureName.ERC20_BURNABLE),
    pausable: featureNames.includes(EFeatureName.ERC20_PAUSABLE),
    premint: featureNames.includes(EFeatureName.ERC20_PREMINT),
    cap: featureNames.includes(EFeatureName.ERC20_CAPPED),
    mintable: featureNames.includes(EFeatureName.ERC20_MINTABLE),
    permit: featureNames.includes(EFeatureName.ERC20_PERMIT),
    votes: featureNames.includes(EFeatureName.ERC20_VOTES),
    flashmint: featureNames.includes(EFeatureName.ERC20_FLASH_MINT),
    ownable: featureNames.includes(EFeatureName.ACCESS_OWNABLE),
  } satisfies TERC20Options;
};

export const featuresToOptionsPresale = (featureNames: EFeatureName[]) => {
  return {
    buy: featureNames.includes(EFeatureName.PRESALE_BASE_ERC20)
      ? EPresaleBuyOptions.ERC20
      : EPresaleBuyOptions.Native,
    allowlist: featureNames.includes(EFeatureName.PRESALE_ALLOWLIST),
    capped: featureNames.includes(EFeatureName.PRESALE_CAPPED),
    contributionLimits: featureNames.includes(
      EFeatureName.PRESALE_CONTRIBUTION_LIMITS,
    ),
    vestedClaims: featureNames.includes(EFeatureName.PRESALE_VESTED_CLAIMS),
    withFee: featureNames.includes(EFeatureName.PRESALE_WITH_FEE),
  } satisfies TPresaleOptions;
};

export async function getModuleSourceCode(
  moduleName: EModuleName,
  featureNames: EFeatureName[],
) {
  switch (moduleName) {
    case EModuleName.TOKEN:
      return ContractService.buildERC20(featuresToOptionsERC20(featureNames));
    case EModuleName.PRESALE:
      return ContractService.buildPresale(
        featuresToOptionsPresale(featureNames),
      );
    default:
      throw new Error("Module not supported");
  }
}
