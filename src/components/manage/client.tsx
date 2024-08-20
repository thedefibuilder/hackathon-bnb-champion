"use client";

import {
  TCanvasItem,
  canvasItemsMap,
  dropArea,
  generateCanvasId,
} from "@/lib/canvas-item";
import { DragEndEvent, DndContext } from "@dnd-kit/core";
import React, { useState } from "react";
import Canvas, { TCanvasProps } from "../canvas";
import { TFontItem } from "@/lib/server-actions";
import Sidebar from "../sidebar";
import { useForm, FormProvider } from "react-hook-form";

type TManageClientProps = {
  fonts: TFontItem[];
};
type TFormValues = {
  items: {
    grid: {
      row: string;
      col: string;
      gapColumns: string;
      gapRows: string;
    };
  };
};
export default function ManageClient({ fonts }: TManageClientProps) {
  const defaultValues: TFormValues = {
    items: {
      grid: {
        row: "1",
        col: "2",
        gapColumns: "0",
        gapRows: "0",
      },
    },
  };

  const methods = useForm<TFormValues>({ defaultValues });
  const { handleSubmit, register } = methods;

  const [canvasItems, setCanvasItems] = useState<TCanvasItem[]>([]);

  const createCanvasItem = (
    id: string,
    index: number,
    item: TCanvasItem,
  ): TCanvasItem => {
    if (item.requiresProps) {
      return {
        id,
        index,
        component: (props: TCanvasProps) => item.component(props),
        requiresProps: true,
      };
    } else {
      return {
        id,
        index,
        component: item.component,
        requiresProps: false,
      };
    }
  };
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && over.id === dropArea.id) {
      const item = canvasItemsMap[active.id as string];

      if (item) {
        const newItem = createCanvasItem(
          generateCanvasId(active.id),
          canvasItems.length,
          item,
        );

        setCanvasItems((prevItems) => [...prevItems, newItem]);
      }
    }
  };

  const onSubmit = (data: any) => {
    console.log("Form Data: ", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DndContext onDragEnd={handleDragEnd}>
          <Sidebar fonts={fonts} />
          <Canvas canvasItems={canvasItems} setCanvasItems={setCanvasItems} />
        </DndContext>
      </form>
    </FormProvider>
  );
}
