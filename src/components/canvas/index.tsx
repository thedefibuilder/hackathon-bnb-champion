import React, { act } from "react";
import { TCanvasItem } from "@/lib/canvas-item";

import DropArea from "./drop-area";

import { Container } from "../common/grid";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import EditableSection from "./editable-section";
import { Button } from "../ui/button";
import { IconFile, IconFileCheck } from "@tabler/icons-react";

export type TCanvasProps = {
  canvasItems: TCanvasItem[];
  setCanvasItems: React.Dispatch<React.SetStateAction<TCanvasItem[]>>;
};

export default function Canvas({ canvasItems, setCanvasItems }: TCanvasProps) {
  function onRemove(id: string) {
    setCanvasItems((prev) => prev.filter((item) => item.id !== id));
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && over.id !== active.id) {
      setCanvasItems((items) => {
        // swap items
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        const updatedItems = [...items];
        const [movedItem] = updatedItems.splice(oldIndex, 1);
        if (!movedItem) {
          console.error("Could not find moved item");
          return updatedItems;
        }
        updatedItems.splice(newIndex, 0, movedItem);

        return updatedItems;
      });
    }
  };

  return (
    <div className="fixed right-0 h-screen w-2/3 p-4">
      <div className="fixed right-4 mt-4 flex items-center gap-4">
        <Button className="flex items-center gap-3" variant="outline">
          Save Draft
          <IconFile />
        </Button>
        <Button className="flex items-center gap-3" variant="default">
          Publish
          <IconFileCheck />
        </Button>
      </div>

      <div className="h-32" />

      <div className="ml-40 flex w-5/6 items-center justify-center">
        <Container className="grid grid-cols-1 gap-4 lg:grid-cols-1 md:grid-cols-1">
          <DndContext onDragEnd={handleDragEnd}>
            <SortableContext items={canvasItems.map((item) => item.id)}>
              <ul>
                {canvasItems.map((item) => (
                  <EditableSection
                    key={item.id}
                    id={item.id}
                    onRemove={onRemove}
                  >
                    {item.component({ canvasItems, setCanvasItems })}
                  </EditableSection>
                ))}
              </ul>
            </SortableContext>
          </DndContext>
        </Container>
      </div>
    </div>
  );
}
