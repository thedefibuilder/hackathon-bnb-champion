"use client";
import React, { useMemo, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { usePathname } from "next/navigation";
import Canvas from "../canvas";
import Sidebar from "../sidebar";
import { TCanvasForm, TCanvasItem, canvasItemsMap } from "@/lib/canvas-item";
import { TFontItem } from "@/lib/server-actions";
import {
  CustomizableTemplatesName,
  EItemName,
  generateRandomId,
} from "@/lib/items";
import {
  customizableItemsMap,
  TCustomizableItem,
} from "@/lib/customizableTemplateItems";

type TManageClientProps = {
  fonts: TFontItem[];
};

function isCustomizableTemplatesName(
  value: string,
): value is CustomizableTemplatesName {
  return Object.values(CustomizableTemplatesName).includes(
    value as CustomizableTemplatesName,
  );
}

function isCustomizableItemArray(
  items: TCustomizableItem[] | TCustomizableItem | undefined,
): items is TCustomizableItem[] {
  return Array.isArray(items);
}

export default function ManageClient({ fonts }: TManageClientProps) {
  const form = useForm<TCanvasForm>();
  const [canvasItemsOrder, setCanvasItemsOrder] = useState<string[]>([]);

  const pathname = usePathname();
  const pathId = pathname.split("/").pop() || ("" as string);

  const canvasItems = useMemo(
    () =>
      canvasItemsOrder
        .map((id) => form.getValues(id))
        .filter((item): item is TCanvasItem => item !== undefined),
    [form.watch(), canvasItemsOrder],
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

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

  const customizableItems = isCustomizableTemplatesName(pathId)
    ? customizableItemsMap[pathId]
    : [];

  const itemsToRender: TCustomizableItem[] = isCustomizableItemArray(
    customizableItems,
  )
    ? customizableItems
    : [];
  console.log(pathId);
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DndContext onDragEnd={handleDragEnd}>
          <div className="flex">
            <aside className="w-80">
              <Sidebar fonts={fonts} />
            </aside>

            <main className="flex-grow">
              {pathId === "blog" ? (
                <SortableContext items={canvasItemsOrder}>
                  <Canvas
                    canvasItems={canvasItems}
                    onRemove={(id) => form.setValue(id, undefined)}
                  />
                </SortableContext>
              ) : (
                customizableItemsMap[pathId as CustomizableTemplatesName]
                  ?.component
              )}
            </main>
          </div>
        </DndContext>
      </form>
    </FormProvider>
  );
}
