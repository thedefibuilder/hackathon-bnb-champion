import React from "react";
import { Container } from "../common/grid";
import { TCanvasItem } from "@/lib/canvas-item";
import DropArea from "./drop-area";
import EditableSection from "./editable-section";

type TCanvasProps = {
  canvasItems: TCanvasItem[];
  setCanvasItems: React.Dispatch<React.SetStateAction<TCanvasItem[]>>;
};

export default function Canvas({ canvasItems, setCanvasItems }: TCanvasProps) {
  function onRemove(id: string) {
    setCanvasItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className="fixed right-0 h-screen w-2/3 p-4">
      <Container className="grid grid-cols-1 gap-4 lg:grid-cols-1 md:grid-cols-1">
        {canvasItems.map((item) => (
          <EditableSection key={item.id} id={item.id} onRemove={onRemove}>
            {item.component}
          </EditableSection>
        ))}

        <DropArea />
      </Container>
    </div>
  );
}
