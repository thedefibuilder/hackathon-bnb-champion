import DropArea from "@/components/canvas/drop-area";
import ButtonItem from "@/components/canvas/items/button";
import GridItem from "@/components/canvas/items/grid";
import HeadingItem from "@/components/canvas/items/heading";
import ImageItem from "@/components/canvas/items/image";
import TextEditorItem from "@/components/canvas/items/text-editor";
import { EItemName } from "./items";
import GridSettingsDialog from "@/components/canvas/items/dialog/grid-settings-dialog";
import ImageSettingsDialog from "@/components/canvas/items/dialog/image-settings-dialog";
import ButtonSettingsDialog from "@/components/canvas/items/dialog/button-settings-dialog";

export type TCanvasItem =
  | {
      id: string;
      component: (id: string) => JSX.Element;
      itemName: EItemName.textEditor | EItemName.dropArea;
      settings: any;
      modal?: (id: string) => JSX.Element;
    }
  | {
      id: string;
      component: (id: string) => JSX.Element;
      itemName: EItemName.heading;
      settings: {
        level:
          | "header-one"
          | "header-two"
          | "header-three"
          | "header-four"
          | "header-five"
          | "header-six";
        text: string;
      };
      modal?: (id: string) => JSX.Element;
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
      modal?: (id: string) => JSX.Element;
    }
  | {
      id: string;
      component: (id: string) => JSX.Element;
      itemName: EItemName.image;
      settings: {
        source: string;
        width: number;
        height: number;
        name: string;
        accept?: string;
        maxSize?: number;
      };
      modal?: (id: string) => JSX.Element;
    }
  | {
      id: string;
      component: (id: string) => JSX.Element;
      itemName: EItemName.button;
      settings: {
        text: string;
        link?: string;
      };
      modal?: (id: string) => JSX.Element;
    };

const dropArea: TCanvasItem = {
  id: "drop-area",
  component: (id: string) => <DropArea />,
  itemName: EItemName.dropArea,
  settings: {},
};

const heading: TCanvasItem = {
  id: "heading",
  component: (id: string) => <HeadingItem id={id} />,
  itemName: EItemName.heading,
  settings: {
    level: "header-one",
    text: "Add text",
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
  modal: (id: string) => <GridSettingsDialog id={id} />,
};

const textEditor: TCanvasItem = {
  id: "textEditor",
  component: (id: string) => <TextEditorItem id={id} />,
  itemName: EItemName.textEditor,
  settings: {},
};

const image: TCanvasItem = {
  id: "image",
  component: (id: string) => (
    <ImageItem accept="image/*" maxSize={5000000} id={id} />
  ),
  itemName: EItemName.image,
  settings: {
    source: "",
    width: 100,
    height: 100,
    name: "uploadeImage",
    accept: "image/*",
    maxSize: 5000000, // 5 MB
  },
  modal: (id: string) => <ImageSettingsDialog id={id} />,
};

const button: TCanvasItem = {
  id: "button",
  component: (id: string) => <ButtonItem id={id} />,
  itemName: EItemName.button,
  settings: {
    text: "Click Me!",
  },
  modal: (id: string) => <ButtonSettingsDialog id={id} />,
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
