import React from "react";

import { PlusCircle } from "lucide-react";
import DroppableSection from "./droppable-section";
import { generateRandomId } from "@/lib/widgets";

export default function DropArea() {
  return (
    <DroppableSection id={generateRandomId()}>
      <PlusCircle className="h-8 w-8 text-gray-400" />
      <span className="ml-2 text-gray-500">Drop item here</span>
    </DroppableSection>
  );
}
