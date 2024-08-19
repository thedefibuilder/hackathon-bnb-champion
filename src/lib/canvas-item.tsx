import DropArea from "@/components/canvas/drop-area";

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
  component: <div>Heading</div>,
};

const textEditor = {
  id: "textEditor",
  index: 2,
  component: <div>Text Editor</div>,
};

const image = {
  id: "image",
  index: 3,
  component: <div>Image</div>,
};

const button = {
  id: "button",
  index: 4,
  component: <div>Button</div>,
};

export const canvasItemsMap: Record<string, TCanvasItem> = {
  heading,
  textEditor,
  image,
  button,
};
