"use client";

import React, { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

import Sidebar from "@/components/sidebar";
import Canvas from "@/components/canvas";

import { canvasItemsMap, dropArea, TCanvasItem } from "@/lib/canvas-item";

export default function ManagePage() {
  const [canvasItems, setCanvasItems] = useState<TCanvasItem[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && over.id === dropArea.id) {
      const newItem = {
        id: active.id as string,
        index: canvasItems.length,
        component: <div>{canvasItemsMap[active.id]?.component}</div>,
      };

      setCanvasItems((prev) => [...prev, newItem]);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Sidebar />

      <Canvas canvasItems={canvasItems} />
    </DndContext>
  );
}
