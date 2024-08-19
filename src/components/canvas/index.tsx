import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { PlusCircle } from "lucide-react";
import { Container } from "../common/grid";
import { TCanvasItem } from "@/lib/canvas-items";

type TCanvasProps = {
  canvasItems: TCanvasItem[];
  addItemArea: TCanvasItem;
};

export default function Canvas({ canvasItems, addItemArea }: TCanvasProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: addItemArea.id,
    data: {
      index: addItemArea.index,
    },
  });

  return (
    <div className="fixed right-0 h-screen w-2/3 p-4">
      <h2 className="mb-4 text-2xl font-bold">Canvas</h2>
      <Container className="grid grid-cols-1 gap-4 lg:grid-cols-1 md:grid-cols-1">
        {canvasItems.map((item) => (
          <div
            key={item.id}
            className="flex min-h-[100px] items-center justify-center rounded-md border-2 border-gray-300 p-4"
          >
            {item.id}
          </div>
        ))}

        <div
          ref={setNodeRef}
          className={`flex min-h-[100px] items-center justify-center rounded-md border-2 border-dashed p-4 ${
            isOver ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
        >
          <PlusCircle className="h-8 w-8 text-gray-400" />
          <span className="ml-2 text-gray-500">Drop item here</span>
        </div>
      </Container>
    </div>
  );
}
