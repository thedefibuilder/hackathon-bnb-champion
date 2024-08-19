import DropArea from "@/components/canvas/drop-area";
import ButtonItem from "@/components/canvas/items/button";
import HeadingItem from "@/components/canvas/items/heading";
import ImageItem from "@/components/canvas/items/image";
import TextEditorItem from "@/components/canvas/items/text-editor";

export type TCanvasItem = {
  id: string;
  index: number;
  component: JSX.Element;
};

export const dropArea = {
  id: "drop-area",
  index: 0, // the index doesn't matter for the drop area
  component: <DropArea />,
};

const heading = {
  id: "heading",
  index: 1,
  component: <HeadingItem />,
};

const textEditor = {
  id: "textEditor",
  index: 2,
  component: <TextEditorItem />,
};

const image = {
  id: "image",
  index: 3,
  component: <ImageItem />,
};

const button = {
  id: "button",
  index: 4,
  component: <ButtonItem />,
};

export const canvasItemsMap: Record<string, TCanvasItem> = {
  heading,
  textEditor,
  image,
  button,
};

export {
  heading as headingItem,
  textEditor as textEditorItem,
  image as imageItem,
  button as buttonItem,
};
