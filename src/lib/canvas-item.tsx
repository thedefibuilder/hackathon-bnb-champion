import { TCanvasProps } from "@/components/canvas";
import DropArea from "@/components/canvas/drop-area";
import ButtonItem from "@/components/canvas/items/button";
import GridItem from "@/components/canvas/items/grid";
import HeadingItem from "@/components/canvas/items/heading";
import ImageItem from "@/components/canvas/items/image";
import TextEditorItem from "@/components/canvas/items/text-editor";
import { EWidgetName } from "./widgets";

export type TCanvasItem =
  | {
      id: string;
      component: (props: TCanvasProps) => JSX.Element;
      widgetName: EWidgetName;
      requiresProps: true;
    }
  | {
      id: string;
      component: () => JSX.Element;
      widgetName: EWidgetName;

      requiresProps: false;
    };

export const dropArea: TCanvasItem = {
  id: "drop-area",
  component: () => <DropArea />,
  widgetName: EWidgetName.dropArea,
  requiresProps: false,
};

const heading: TCanvasItem = {
  id: "heading",
  component: () => <HeadingItem />,
  widgetName: EWidgetName.heading,
  requiresProps: false,
};

const grid: TCanvasItem = {
  id: "grid",
  component: ({ canvasItems, setCanvasItems }: TCanvasProps) => (
    <GridItem canvasItems={canvasItems} setCanvasItems={setCanvasItems} />
  ),
  widgetName: EWidgetName.grid,
  requiresProps: true,
};

const textEditor: TCanvasItem = {
  id: "textEditor",
  component: () => <TextEditorItem />,
  widgetName: EWidgetName.textEditor,
  requiresProps: false,
};

const image: TCanvasItem = {
  id: "image",
  component: () => <ImageItem />,
  widgetName: EWidgetName.image,
  requiresProps: false,
};

const button: TCanvasItem = {
  id: "button",
  component: () => <ButtonItem />,
  widgetName: EWidgetName.button,
  requiresProps: false,
};

const canvasItemsMap: Record<EWidgetName, TCanvasItem> = {
  [EWidgetName.dropArea]: dropArea,
  [EWidgetName.heading]: heading,
  [EWidgetName.textEditor]: textEditor,
  [EWidgetName.image]: image,
  [EWidgetName.button]: button,
  [EWidgetName.grid]: grid,
  [EWidgetName.container]: grid, // todo change for container
};

export {
  canvasItemsMap,
  heading as canvasHeading,
  textEditor as canvasTextEditor,
  image as canvasImage,
  button as canvasButton,
  grid as canvasGrid,
};
