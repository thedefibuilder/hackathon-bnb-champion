import { EWidgetName, generateRandomId } from "@/lib/widgets";
import { useDroppable } from "@dnd-kit/core";
import React from "react";

type TDroppableSectionProps = {
  id: string;
  children: React.ReactNode;
};

export default function DroppableSection({
  id,
  children,
}: TDroppableSectionProps) {
  const { setNodeRef, isOver } = useDroppable({
    id,
    data: { widgetName: EWidgetName.dropArea },
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex min-h-[100px] items-center justify-center rounded-md border-2 border-dashed p-4 ${
        isOver && "border-primary"
      }`}
    >
      {children}
    </div>
  );
}
