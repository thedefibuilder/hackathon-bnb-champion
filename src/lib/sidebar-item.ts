import {
  IconAlignJustified,
  IconBoxPadding,
  IconHeading,
  IconLayoutDashboard,
  IconPhoto,
  IconSquareRoundedPlus,
  TablerIcon,
} from "@tabler/icons-react";
import { EWidgetName } from "./widgets";

export type TSidebarItem = {
  id: string;
  widgetName: EWidgetName;
  title: string;
  icon: TablerIcon;
};

const textEditor = {
  id: "",
  widgetName: EWidgetName.textEditor,
  title: "Text Block",
  icon: IconAlignJustified,
};

const image = {
  id: "",
  widgetName: EWidgetName.image,
  title: "Image",
  icon: IconPhoto,
};

const button = {
  id: "",
  widgetName: EWidgetName.button,
  title: "Button",
  icon: IconSquareRoundedPlus,
};

const heading = {
  id: "",
  widgetName: EWidgetName.heading,
  title: "Heading",
  icon: IconHeading,
};

const container = {
  id: "",
  widgetName: EWidgetName.container,
  title: "Container",
  icon: IconBoxPadding,
};

const grid = {
  id: "",
  widgetName: EWidgetName.grid,
  title: "Grid",
  icon: IconLayoutDashboard,
};

const sidebarItemsMap: Partial<Record<EWidgetName, TSidebarItem>> = {
  [EWidgetName.textEditor]: textEditor,
  [EWidgetName.image]: image,
  [EWidgetName.button]: button,
  [EWidgetName.heading]: heading,
  [EWidgetName.container]: container,
  [EWidgetName.grid]: grid,
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
