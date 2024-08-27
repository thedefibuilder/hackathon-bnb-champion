import {
  type ForwardRefExoticComponent,
  type RefAttributes,
  type SVGProps,
} from "react";

import type { LucideIcon } from "lucide-react";

import { Globe, LayoutGrid, SquarePlus } from "lucide-react";
import DorahacksLogo from "@/assets/images/DoraHacks-logo.png";

export enum ENavRoutesName {
  home = "Home",
  manage = "Manage",
  leaderboard = "Leaderboard",
  dorahacks = "Find out more on DoraHacks",
}

export enum ENavRoutesPath {
  home = "/",
  manage = "/manage",
  leaderboard = "/leaderboard",
  dorahacks = "https://dorahacks.io/buidl/15114",
}
type TablerIcon = ForwardRefExoticComponent<
  SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
>;
type CombinedIcon = LucideIcon | TablerIcon;

interface DashboardRoute {
  name: ENavRoutesName;
  path: ENavRoutesPath;
  icon: CombinedIcon;
}

export const navRoutes: DashboardRoute[] = [
  {
    name: ENavRoutesName.home,
    path: ENavRoutesPath.home,
    icon: SquarePlus,
  },
  {
    name: ENavRoutesName.manage,
    path: ENavRoutesPath.manage,
    icon: LayoutGrid,
  },
  {
    name: ENavRoutesName.leaderboard,
    path: ENavRoutesPath.leaderboard,
    icon: Globe,
  },
  {
    name: ENavRoutesName.dorahacks,
    path: ENavRoutesPath.dorahacks,
    icon: DorahacksLogo as unknown as CombinedIcon, // fix this
  },
];
