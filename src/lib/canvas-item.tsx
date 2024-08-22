import DropArea from "@/components/canvas/drop-area";
import ButtonItem from "@/components/canvas/items/button";
import GridItem from "@/components/canvas/items/grid";
import HeadingItem from "@/components/canvas/items/heading";
import ImageItem from "@/components/canvas/items/image";
import TextEditorItem from "@/components/canvas/items/text-editor";
import { EItemName } from "./items";

export type TCanvasItem =
  | {
      id: string;
      component: (id: string) => JSX.Element;
      itemName: EItemName.textEditor | EItemName.dropArea;
      settings: any;
    }
  | {
      id: string;
      component: (id: string) => JSX.Element;
      itemName: EItemName.heading;
      settings: {
        level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
      };
    }
  | {
      id: string;
      component: (id: string) => JSX.Element;
      itemName: EItemName.grid;
      settings: {
        rows: number;
        cols: number;
        gapColumns: number;
        gapRows: number;
      };
    }
  | {
      id: string;
      component: (id: string) => JSX.Element;
      itemName: EItemName.image;
      settings: {
        source: string;
        width: number;
        height: number;
      };
    }
  | {
      id: string;
      component: (id: string) => JSX.Element;
      itemName: EItemName.button;
      settings: {
        text: string;
        link?: string;
      };
    };

export const dropArea: TCanvasItem = {
  id: "drop-area",
  component: (id: string) => <DropArea />,
  itemName: EItemName.dropArea,
  settings: {},
};

const heading: TCanvasItem = {
  id: "heading",
  component: (id: string) => <HeadingItem />,
  itemName: EItemName.heading,
  settings: {
    level: "h1",
  },
};

const grid: TCanvasItem = {
  id: "grid",
  component: (id: string) => <GridItem id={id} />,
  itemName: EItemName.grid,
  settings: {
    rows: 1,
    cols: 1,
    gapColumns: 0,
    gapRows: 0,
  },
};

const textEditor: TCanvasItem = {
  id: "textEditor",
  component: (id: string) => <TextEditorItem />,
  itemName: EItemName.textEditor,
  settings: {},
};

const image: TCanvasItem = {
  id: "image",
  component: (id: string) => <ImageItem />,
  itemName: EItemName.image,
  settings: {
    source: "image.png",
    width: 100,
    height: 100,
  },
};

const button: TCanvasItem = {
  id: "button",
  component: (id: string) => <ButtonItem />,
  itemName: EItemName.button,
  settings: {
    text: "Click Me!",
  },
};

const canvasItemsMap: Record<EItemName, TCanvasItem> = {
  [EItemName.dropArea]: dropArea,
  [EItemName.heading]: heading,
  [EItemName.textEditor]: textEditor,
  [EItemName.image]: image,
  [EItemName.button]: button,
  [EItemName.grid]: grid,
  [EItemName.container]: grid, // todo change for container
};

export type TCanvasForm = Record<string, TCanvasItem | undefined>;

export {
  canvasItemsMap,
  heading as canvasHeading,
  textEditor as canvasTextEditor,
  image as canvasImage,
  button as canvasButton,
  grid as canvasGrid,
};
