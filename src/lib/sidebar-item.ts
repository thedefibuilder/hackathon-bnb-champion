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

const textEditor = {
  id: "textEditor",
  title: "Text Block",
  icon: TextIcon,
};

const image = {
  id: "image",
  title: "Image",
  icon: ImageIcon,
};

const button = {
  id: "button",
  title: "Button",
  icon: SquarePlusIcon,
};

const heading = {
  id: "heading",
  title: "Heading",
  icon: HeadingIcon,
};

const container = {
  id: "container",
  title: "Container",
  icon: SquarePlusIcon,
};

const grid = {
  id: "grid",
  title: "Grid",
  icon: SquarePlusIcon,
};

const sidebarItemsMap: Record<string, TSidebarItem> = {
  textEditor,
  image,
  button,
  heading,
} as const;

const sidebarItemsArray = Object.values(sidebarItemsMap);

export {
  sidebarItemsMap,
  sidebarItemsArray,
  heading as sidebarHeading,
  textEditor as sidebarTextEditor,
  image as sidebarImage,
  button as sidebarButton,
  container as sidebarContainer,
  grid as sidebarGrid,
};
