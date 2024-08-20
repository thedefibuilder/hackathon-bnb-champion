import {
  IconAlignJustified,
  IconBoxPadding,
  IconHeading,
  IconLayoutDashboard,
  IconPhoto,
  IconSquareRoundedPlus,
  TablerIcon,
} from "@tabler/icons-react";

export type TSidebarItem = {
  id: string;
  title: string;
  icon: TablerIcon;
};

const textEditor = {
  id: "textEditor",
  title: "Text Block",
  icon: IconAlignJustified,
};

const image = {
  id: "image",
  title: "Image",
  icon: IconPhoto,
};

const button = {
  id: "button",
  title: "Button",
  icon: IconSquareRoundedPlus,
};

const heading = {
  id: "heading",
  title: "Heading",
  icon: IconHeading,
};

const container = {
  id: "container",
  title: "Container",
  icon: IconBoxPadding,
};

const grid = {
  id: "grid",
  title: "Grid",
  icon: IconLayoutDashboard,
};

const sidebarItemsMap: Record<string, TSidebarItem> = {
  textEditor,
  image,
  button,
  heading,
  container,
  grid,
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
