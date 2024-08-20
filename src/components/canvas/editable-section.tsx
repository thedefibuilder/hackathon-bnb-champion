import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CircleXIcon, MoveIcon } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";

export type TEditableSectionProps = {
  id: string;
  children?: React.ReactNode;
  onRemove: (id: string) => void;
};

export default function EditableSection({
  id,
  children,
  onRemove,
}: TEditableSectionProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
  } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li ref={setNodeRef} style={style} {...attributes}>
      <div
        className={`flex min-h-[100px] items-center justify-center rounded-md border-2 p-4`}
      >
        {children}

        <button className="right-2 top-2" onClick={() => onRemove(id)}>
          <CircleXIcon className="h-6 w-6 fill-destructive" />
        </button>

        <button
          className="right-2 top-2"
          ref={setActivatorNodeRef}
          {...listeners}
        >
          <MoveIcon className="h-6 w-6" />
        </button>
      </div>
    </li>
  );
}
