import { type ForwardRefExoticComponent, type RefAttributes, type SVGProps } from 'react';

import type { LucideIcon } from 'lucide-react';

import { IconBrandProducthunt } from '@tabler/icons-react';
import { Globe, LayoutGrid, SquarePlus } from 'lucide-react';

export enum ENavRoutesName {
  create = 'Create',
  dashboard = 'Manage',
  explore = 'Explore',
  productHunt = 'Find out more on ProductHunt'
}

export enum ENavRoutesPath {
  home = '/',
  create = '/create',
  dashboard = '/manage',
  explore = '/explore',
  productHunt = 'https://www.producthunt.com/posts/defi-builder'
}
type TablerIcon = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
type CombinedIcon = LucideIcon | TablerIcon;

interface DashboardRoute {
  name: ENavRoutesName;
  path: ENavRoutesPath;
  icon: CombinedIcon;
}

export const navRoutes: DashboardRoute[] = [
  {
    name: ENavRoutesName.create,
    path: ENavRoutesPath.create,
    icon: SquarePlus
  },
  {
    name: ENavRoutesName.dashboard,
    path: ENavRoutesPath.dashboard,
    icon: LayoutGrid
  },
  {
    name: ENavRoutesName.explore,
    path: ENavRoutesPath.explore,
    icon: Globe
  },
  {
    name: ENavRoutesName.productHunt,
    path: ENavRoutesPath.productHunt,
    icon: IconBrandProducthunt as TablerIcon
  }
];
