import type { LucideIcon } from 'lucide-react';

import { BadgeCent, BookHeart, Brush, Coins, HandCoinsIcon, RocketIcon, Vault } from 'lucide-react';

export type TModule = {
  name: EModuleName;
  icon: LucideIcon;
  description: string;
  available: boolean;
};

export enum EModuleName {
  TOKEN = 'Token',
  PRESALE = 'Presale',
  NFT = 'NFT',
  EDITION = 'Edition',
  LAUNCHPAD = 'Launchpad',
  EXCHANGE = 'Exchange'
}

export const moduleNames = Object.values(EModuleName) as [EModuleName, ...EModuleName[]];

export const modules: TModule[] = [
  {
    name: EModuleName.TOKEN,
    icon: BadgeCent,
    description: 'Create a ERC20 compliant fungible token.',
    available: true
  },
  {
    name: EModuleName.PRESALE,
    icon: HandCoinsIcon,
    description: 'Create a token presale for your project.',
    available: true
  },
  {
    name: EModuleName.NFT,
    icon: Brush,
    description: 'Create a ERC721 compliant non-fungible token.',
    available: false
  },
  {
    name: EModuleName.EDITION,
    icon: BookHeart,
    description: 'Create a ERC1155 compliant semi-fungible token.',
    available: false
  },
  {
    name: EModuleName.LAUNCHPAD,
    icon: RocketIcon,
    description: 'Create a launchpad platform to launch other tokens.',
    available: false
  },
  {
    name: EModuleName.EXCHANGE,
    icon: Coins,
    description: 'Create a decentralized exchange for your project.',
    available: false
  }
];
