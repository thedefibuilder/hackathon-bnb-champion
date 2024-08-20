import DropArea from "@/components/canvas/drop-area";
import ButtonItem from "@/components/canvas/items/button";
import HeadingItem from "@/components/canvas/items/heading";
import ImageItem from "@/components/canvas/items/image";
import TextEditorItem from "@/components/canvas/items/text-editor";
import { UniqueIdentifier } from "@dnd-kit/core";

export type TCanvasItem = {
  id: string;
  component: JSX.Element;
};

export const dropArea = {
  id: "drop-area",
  component: <DropArea />,
};

const heading = {
  id: "heading",
  component: <HeadingItem />,
};

const textEditor = {
  id: "textEditor",
  component: <TextEditorItem />,
};

const image = {
  id: "image",
  component: <ImageItem />,
};

const button = {
  id: "button",
  component: <ButtonItem />,
};

export const canvasItemsMap: Record<string, TCanvasItem> = {
  heading,
  textEditor,
  image,
  button,
};

export function generateCanvasId(itemId: UniqueIdentifier) {
  return `${itemId}_canvas_${Date.now()}`;
}

export {
  heading as canvasHeading,
  textEditor as canvasTextEditor,
  image as canvasImage,
  button as canvasButton,
};
