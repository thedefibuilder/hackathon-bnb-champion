"use client";

import { TCanvasForm, TCanvasItem, canvasItemsMap } from "@/lib/canvas-item";
import { DragEndEvent, DndContext } from "@dnd-kit/core";
import React, { useMemo, useState } from "react";
import Canvas from "../canvas";
import { TFontItem } from "@/lib/server-actions";
import Sidebar from "../sidebar";
import { useForm, FormProvider } from "react-hook-form";
import { EItemName, generateRandomId } from "@/lib/items";
import { SortableContext } from "@dnd-kit/sortable";

type TManageClientProps = {
  fonts: TFontItem[];
};

export default function ManageClient({ fonts }: TManageClientProps) {
  const form = useForm<TCanvasForm>();
  const [canvasItemsOrder, setCanvasItemsOrder] = useState<string[]>([]);
  const canvasItems = useMemo(
    () =>
      canvasItemsOrder
        .map((id) => form.getValues(id))
        .filter((item) => item !== undefined),
    [form.watch(), canvasItemsOrder],
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // If the item is dropped over the drop area, add it to the canvas
    if (over && over.data.current?.itemName === EItemName.dropArea) {
      const item = canvasItemsMap[active.data.current?.itemName as EItemName];

      if (item) {
        const newItem = {
          ...item,
          id: generateRandomId(),
        };

        form.setValue(newItem.id, newItem);
        setCanvasItemsOrder((items) => [...items, newItem.id]);
      }
    }

    // If the item is dropped over another item, reorder the items
    if (over && over.id !== active.id && over.data.current?.sortable) {
      const oldIndex = active.data.current?.sortable.index;
      const newIndex = over.data.current?.sortable.index;

      if (oldIndex !== -1 && newIndex !== -1) {
        const updatedOrder = [...canvasItemsOrder];
        const [movedId] = updatedOrder.splice(oldIndex, 1);
        updatedOrder.splice(newIndex, 0, movedId!);

        setCanvasItemsOrder(updatedOrder);
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
          <div className="flex">
            <aside className="w-80">
              <Sidebar fonts={fonts} />
            </aside>

            <main className="flex-grow">
              <SortableContext items={canvasItemsOrder}>
                <Canvas
                  canvasItems={canvasItems}
                  onRemove={(id) => form.setValue(id, undefined)}
                />
              </SortableContext>
            </main>
          </div>
        </DndContext>
      </form>
    </FormProvider>
  );
}
