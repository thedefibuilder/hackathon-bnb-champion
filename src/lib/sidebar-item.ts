import {
  IconAlignJustified,
  IconBoxPadding,
  IconHeading,
  IconLayoutDashboard,
  IconPhoto,
  IconSquareRoundedPlus,
  TablerIcon,
} from "@tabler/icons-react";
import { EItemName } from "./items";

export type TSidebarItem = {
  id: string;
  itemName: EItemName;
  title: string;
  icon: TablerIcon;
};

const textEditor = {
  id: "",
  itemName: EItemName.textEditor,
  title: "Text Block",
  icon: IconAlignJustified,
};

const image = {
  id: "",
  itemName: EItemName.image,
  title: "Image",
  icon: IconPhoto,
};

const button = {
  id: "",
  itemName: EItemName.button,
  title: "Button",
  icon: IconSquareRoundedPlus,
};

const heading = {
  id: "",
  itemName: EItemName.heading,
  title: "Heading",
  icon: IconHeading,
};

const container = {
  id: "",
  itemName: EItemName.container,
  title: "Container",
  icon: IconBoxPadding,
};

const grid = {
  id: "",
  itemName: EItemName.grid,
  title: "Grid",
  icon: IconLayoutDashboard,
};

const sidebarItemsMap: Partial<Record<EItemName, TSidebarItem>> = {
  [EItemName.textEditor]: textEditor,
  [EItemName.image]: image,
  [EItemName.button]: button,
  [EItemName.heading]: heading,
  [EItemName.container]: container,
  [EItemName.grid]: grid,
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
