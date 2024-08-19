import React from "react";
import { Container } from "../common/grid";
import { TCanvasItem } from "@/lib/canvas-item";
import DropArea from "./drop-area";

type TCanvasProps = {
  canvasItems: TCanvasItem[];
};

export default function Canvas({ canvasItems }: TCanvasProps) {
  return (
    <div className="fixed right-0 h-screen w-2/3 p-4">
      <h2 className="mb-4 text-2xl font-bold">Canvas</h2>
      <Container className="grid grid-cols-1 gap-4 lg:grid-cols-1 md:grid-cols-1">
        {canvasItems.map((item) => (
          <div key={item.id}>{item.component}</div>
        ))}

        <DropArea />
      </Container>
    </div>
  );
}
