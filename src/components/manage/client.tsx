"use client";

import { TCanvasItem, canvasItemsMap, dropArea } from "@/lib/canvas-item";
import { DragEndEvent, DndContext } from "@dnd-kit/core";
import React, { useState } from "react";
import Canvas from "../canvas";
import { TFontItem } from "@/lib/server-actions";
import Sidebar from "../sidebar";

type TManageClientProps = {
  fonts: TFontItem[];
};

export default function ManageClient({ fonts }: TManageClientProps) {
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
      <Sidebar fonts={fonts} />

      <Canvas canvasItems={canvasItems} setCanvasItems={setCanvasItems} />
    </DndContext>
  );
}
