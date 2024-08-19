"use client";

import React, { useMemo, useState } from "react";
import { DndContext, DragEndEvent, useDroppable } from "@dnd-kit/core";

import Sidebar from "@/components/sidebar";
import Canvas from "@/components/canvas";

import { sidebarItemsArray } from "@/lib/sidebar-item";
import { TCanvasItem } from "@/lib/canvas-items";

export default function ManagePage() {
  const [canvasItems, setCanvasItems] = useState<TCanvasItem[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && over.id === addItemArea.id) {
      const newItem = {
        id: active.id as string,
        index: canvasItems.length,
      };
      setCanvasItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const addItemArea: TCanvasItem = useMemo(() => {
    return {
      id: canvasItems.length.toString(),
      index: canvasItems.length,
    };
  }, [canvasItems]);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Sidebar />

      <Canvas canvasItems={canvasItems} addItemArea={addItemArea} />
    </DndContext>
  );
}
