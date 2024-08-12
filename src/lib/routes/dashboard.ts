'use client';

import type { LucideIcon } from 'lucide-react';

import { FolderKanban, Network, ReceiptText, Settings } from 'lucide-react';

export const dashboardIndex = '/manage/[projectId]';

export enum EDashboardRoutesName {
  overview = 'Overview',
  contracts = 'Contracts',
  dapps = 'Dapps',
  integrations = 'Integrations',
  settings = 'Settings'
}

export enum EDashboardRoutesPath {
  overview = `${dashboardIndex}`,
  contracts = `${dashboardIndex}/contracts`,
  dapps = `${dashboardIndex}/dapps`,
  integrations = `${dashboardIndex}/integrations`,
  settings = `${dashboardIndex}/settings`
}

interface DashboardRoute {
  name: EDashboardRoutesName;
  path: EDashboardRoutesPath;
  icon: LucideIcon;
}

export const dashboardRoutes: DashboardRoute[] = [
  {
    name: EDashboardRoutesName.overview,
    path: EDashboardRoutesPath.overview,
    icon: FolderKanban
  },
  {
    name: EDashboardRoutesName.contracts,
    path: EDashboardRoutesPath.contracts,
    icon: ReceiptText
  },
  {
    name: EDashboardRoutesName.dapps,
    path: EDashboardRoutesPath.dapps,
    icon: Network
  },
  {
    name: EDashboardRoutesName.settings,
    path: EDashboardRoutesPath.settings,
    icon: Settings
  }
];
