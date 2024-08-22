import React, { act } from "react";
import { TCanvasItem } from "@/lib/canvas-item";

import DropArea from "./drop-area";

import { Container } from "../common/grid";
import EditableSection from "./editable-section";
import { Button } from "../ui/button";
import { IconFile, IconFileCheck } from "@tabler/icons-react";

export type TCanvasProps = {
  canvasItems: TCanvasItem[];
  onRemove: (id: string) => void;
};

export default function Canvas({ canvasItems, onRemove }: TCanvasProps) {
  return (
    <div className="fixed right-0 h-screen w-2/3 p-4">
      <div className="fixed right-4 mt-4 flex items-center gap-4">
        <Button
          className="flex items-center gap-3"
          variant="outline"
          type="button"
        >
          Save Draft
          <IconFile />
        </Button>
        <Button
          className="flex items-center gap-3"
          variant="default"
          type="submit"
        >
          Publish
          <IconFileCheck />
        </Button>
      </div>

      <div className="h-32" />

      <div className="flex w-5/6 items-center justify-center">
        <Container className="grid grid-cols-1 gap-4 lg:grid-cols-1 md:grid-cols-1">
          <ul>
            {canvasItems.map((item) => (
              <EditableSection key={item.id} id={item.id} onRemove={onRemove}>
                {item.component(item.id)}
              </EditableSection>
            ))}
          </ul>

          <DropArea />
        </Container>
      </div>
    </div>
  );
}
