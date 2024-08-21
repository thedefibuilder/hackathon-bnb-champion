"use client";

import { TCanvasItem, canvasItemsMap } from "@/lib/canvas-item";
import { DragEndEvent, DndContext } from "@dnd-kit/core";
import React, { useState } from "react";
import Canvas, { TCanvasProps } from "../canvas";
import { TFontItem } from "@/lib/server-actions";
import Sidebar from "../sidebar";
import { useForm, FormProvider } from "react-hook-form";
import { EWidgetName, generateRandomId } from "@/lib/widgets";

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

  const form = useForm<TFormValues>({ defaultValues });

  const [canvasItems, setCanvasItems] = useState<TCanvasItem[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && over.data.current?.widgetName === EWidgetName.dropArea) {
      const item =
        canvasItemsMap[active.data.current?.widgetName as EWidgetName];

      if (item) {
        const newItem = {
          ...item,
          id: generateRandomId(),
        };

        setCanvasItems((prevItems) => [...prevItems, newItem]);
      }
    }
  };

  const onSubmit = (data: any) => {
    console.log("Form Data: ", data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DndContext onDragEnd={handleDragEnd}>
          <Sidebar fonts={fonts} />

          <Canvas canvasItems={canvasItems} setCanvasItems={setCanvasItems} />
        </DndContext>
      </form>
    </FormProvider>
  );
}
