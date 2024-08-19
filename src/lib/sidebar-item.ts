import {
  HeadingIcon,
  ImageIcon,
  LucideIcon,
  SquarePlusIcon,
  TextIcon,
} from "lucide-react";

export type TSidebarItem = {
  id: string;
  title: string;
  icon: LucideIcon;
};

const sidebarItemsMap: Record<string, TSidebarItem> = {
  "1": {
    id: "1",
    title: "Text Block",
    icon: TextIcon,
  },
  "2": {
    id: "2",
    title: "Image",
    icon: ImageIcon,
  },
  "3": {
    id: "3",
    title: "Button",
    icon: SquarePlusIcon,
  },
  "4": {
    id: "4",
    title: "Heading",
    icon: HeadingIcon,
  },
};

const sidebarItemsArray = Object.values(sidebarItemsMap);

export { sidebarItemsMap, sidebarItemsArray };
