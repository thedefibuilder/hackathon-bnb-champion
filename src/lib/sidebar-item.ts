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
  textEditor: {
    id: "textEditor",
    title: "Text Block",
    icon: TextIcon,
  },
  image: {
    id: "image",
    title: "Image",
    icon: ImageIcon,
  },
  button: {
    id: "button",
    title: "Button",
    icon: SquarePlusIcon,
  },
  heading: {
    id: "heading",
    title: "Heading",
    icon: HeadingIcon,
  },
};

const sidebarItemsArray = Object.values(sidebarItemsMap);

export { sidebarItemsMap, sidebarItemsArray };
