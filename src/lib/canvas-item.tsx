import { TCanvasProps } from "@/components/canvas";
import DropArea from "@/components/canvas/drop-area";
import ButtonItem from "@/components/canvas/items/button";
import GridItem from "@/components/canvas/items/grid";
import HeadingItem from "@/components/canvas/items/heading";
import ImageItem from "@/components/canvas/items/image";
import TextEditorItem from "@/components/canvas/items/text-editor";
import { UniqueIdentifier } from "@dnd-kit/core";

export type TCanvasItem =
  | {
      id: string;
      index: number;
      component: (props: TCanvasProps) => JSX.Element;
      requiresProps: true;
    }
  | {
      id: string;
      index: number;
      component: () => JSX.Element;
      requiresProps: false;
    };

export const dropArea: TCanvasItem = {
  id: "drop-area",
  index: 0,
  component: () => <DropArea />,
  requiresProps: false,
};

const heading: TCanvasItem = {
  id: "heading",
  index: 1,
  component: () => <HeadingItem />,
  requiresProps: false,
};

const grid: TCanvasItem = {
  id: "grid",
  index: 2,
  component: ({ canvasItems, setCanvasItems }: TCanvasProps) => (
    <GridItem canvasItems={canvasItems} setCanvasItems={setCanvasItems} />
  ),
  requiresProps: true,
};

const textEditor: TCanvasItem = {
  id: "text-editor",
  index: 4,
  component: () => <TextEditorItem />,
  requiresProps: false,
};

const image: TCanvasItem = {
  id: "image",
  index: 5,
  component: () => <ImageItem />,
  requiresProps: false,
};

const button: TCanvasItem = {
  id: "button",
  index: 6,
  component: () => <ButtonItem />,
  requiresProps: false,
};

export const canvasItemsMap: Record<string, TCanvasItem> = {
  heading,
  textEditor,
  image,
  button,
  grid,
};

export function generateCanvasId(itemId: UniqueIdentifier) {
  return `${itemId}_canvas_${Date.now()}`;
}

export {
  heading as canvasHeading,
  textEditor as canvasTextEditor,
  image as canvasImage,
  button as canvasButton,
  grid as canvasGrid,
};
