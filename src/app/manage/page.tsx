"use client";

import React, { useState } from "react";
import Sidebar from "@/components/sidebar";
import { DndContext } from "@dnd-kit/core";

export default function ManagePage() {
  const [items, setItems] = useState(["sort-1", "sort-2", "sort-3", "sort-4"]);

  return (
    <DndContext>
      <Sidebar />
    </DndContext>
  );
}
