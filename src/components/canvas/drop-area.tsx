import React from "react";

import { useDroppable } from "@dnd-kit/core";
import { PlusCircle } from "lucide-react";

export default function DropArea() {
  const { setNodeRef, isOver } = useDroppable({
    id: "drop-area",
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex min-h-[100px] items-center justify-center rounded-md border-2 border-dashed p-4 ${
        isOver ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }`}
    >
      <PlusCircle className="h-8 w-8 text-gray-400" />
      <span className="ml-2 text-gray-500">Drop item here</span>
    </div>
  );
}
