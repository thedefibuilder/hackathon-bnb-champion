/* eslint-disable sonarjs/no-duplicate-string */
'use client';

import React, { useEffect, useState } from 'react';

export type ThemeName = 'Twilight' | 'Neon' | 'Metallic' | 'Navy' | 'Brass';

export interface ThemeColors {
  primary: string;
  secondary: string;
  muted: string;
  background: string;
  foreground: string;
}

const dappColors: Record<ThemeName, ThemeColors> = {
  Twilight: {
    primary: 'hsl(268, 76%, 48%)',
    secondary: 'hsl(322, 86%, 55%)',
    muted: 'hsl(0, 0%, 44%)',
    background: 'hsl(0, 0%, 5%)',
    foreground: 'hsl(0, 0%, 86%)'
  },
  Neon: {
    primary: 'hsl(158, 79%, 48%)',
    secondary: 'hsl(158, 89%, 53%)',
    muted: 'hsl(158, 80%, 25%)',
    background: 'hsl(0, 0%, 5%)',
    foreground: 'hsl(0, 0%, 86%)'
  },
  Metallic: {
    primary: '	hsl(208, 44%, 17%)',
    secondary: 'hsl(208, 32%, 49%)',
    muted: '	hsl(203, 29%, 51%)',
    background: 'hsl(0, 0%, 5%)',
    foreground: 'hsl(0, 0%, 86%)'
  },
  Navy: {
    primary: 'hsl(220, 96%, 38%)',
    secondary: 'hsl(214, 96%, 38%)',
    muted: '		hsl(225, 79%, 76%)',
    background: 'hsl(0, 0%, 5%)',
    foreground: 'hsl(0, 0%, 86%)'
  },
  Brass: {
    primary: 'hsl(11, 87%, 62%)',
    secondary: 'hsl(28, 42%, 57%)',
    muted: 'hsl(46, 57%, 88%)',
    background: 'hsl(0, 0%, 5%)',
    foreground: 'hsl(0, 0%, 86%)'
  }
};

export default function useDappColors(themeName: ThemeName): ThemeColors {
  const [colors, setColors] = useState<ThemeColors>(dappColors[themeName]);

  useEffect(() => {
    switch (themeName) {
      case 'Twilight':
        setColors(dappColors.Twilight);
        break;
      case 'Neon':
        setColors(dappColors.Neon);
        break;
      case 'Metallic':
        setColors(dappColors.Metallic);
        break;
      case 'Navy':
        setColors(dappColors.Navy);
        break;
      case 'Brass':
        setColors(dappColors.Brass);
        break;
      default:
        setColors(dappColors.Twilight);
        break;
    }
  }, [themeName]);

  return colors;
}
