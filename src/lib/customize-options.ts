import type { LucideIcon } from 'lucide-react';

import { Brush, HeartHandshake, Type } from 'lucide-react';

export enum EColorNames {
  Twilight = 'Twilight',
  Neon = 'Neon',
  Metallic = 'Metallic',
  Navy = 'Navy',
  Brass = 'Brass'
}

export const colorNames = Object.values(EColorNames) as [EColorNames, ...EColorNames[]];

export enum EFontNames {
  Jakarta = 'Jakarta',
  Inter = 'Inter',
  Montserrat = 'Montserrat',
  Space = 'Space',
  Ubuntu = 'Ubuntu'
}

export const fontNames = Object.values(EFontNames) as [EFontNames, ...EFontNames[]];

export enum ESocialNames {
  Facebook = 'Facebook',
  X = 'X',
  Discord = 'Discord',
  Github = 'Github',
  Instagram = 'Instagram'
}

export const socialNames = Object.values(ESocialNames) as [ESocialNames, ...ESocialNames[]];

export type TSocialOption = {
  socialName: ESocialNames;
};

export type TColorOption = {
  colorName: EColorNames;
  image: string;
};

export type TFontOption = {
  fontName: EFontNames;
};

export enum ECustomizeOptions {
  colors = 'Colors',
  fonts = 'Fonts',
  socials = 'Socials'
}

export type TCustomizeOption<TOption> = {
  name: string;
  icon: LucideIcon;
  options: TOption[];
};

export type TCustomizeOptions = {
  [ECustomizeOptions.colors]: TCustomizeOption<TColorOption>;
  [ECustomizeOptions.fonts]: TCustomizeOption<TFontOption>;
  [ECustomizeOptions.socials]: TCustomizeOption<TSocialOption>;
};

export const customizeOptions: TCustomizeOptions = {
  [ECustomizeOptions.colors]: {
    name: ECustomizeOptions.colors,
    icon: Brush,
    options: [
      {
        colorName: EColorNames.Twilight,
        image: '/images/twilight.jpg'
      },
      {
        colorName: EColorNames.Neon,
        image: '/images/neon.jpg'
      },
      {
        colorName: EColorNames.Metallic,
        image: '/images/metallic.jpg'
      },
      {
        colorName: EColorNames.Navy,
        image: '/images/navy.jpg'
      },
      {
        colorName: EColorNames.Brass,
        image: '/images/brass.jpg'
      }
    ]
  },
  [ECustomizeOptions.fonts]: {
    name: ECustomizeOptions.fonts,
    icon: Type,
    options: [
      {
        fontName: EFontNames.Jakarta
      },
      {
        fontName: EFontNames.Inter
      },
      {
        fontName: EFontNames.Montserrat
      },
      {
        fontName: EFontNames.Space
      },
      {
        fontName: EFontNames.Ubuntu
      }
    ]
  },
  [ECustomizeOptions.socials]: {
    name: ECustomizeOptions.socials,
    icon: HeartHandshake,
    options: [
      {
        socialName: ESocialNames.Facebook
      },
      {
        socialName: ESocialNames.X
      },
      {
        socialName: ESocialNames.Discord
      },
      {
        socialName: ESocialNames.Github
      },
      {
        socialName: ESocialNames.Instagram
      }
    ]
  }
};
