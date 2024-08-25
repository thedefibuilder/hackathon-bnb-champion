import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { MoveIcon } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";
import { IconXboxX } from "@tabler/icons-react";
import { TCanvasForm } from "@/lib/canvas-item";
import { useFormContext } from "react-hook-form";

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

  const { watch } = useFormContext<TCanvasForm>();
  const valuesForm = watch(id);

  return (
    <li ref={setNodeRef} style={style} {...attributes}>
      <div
        className={`relative my-6 min-h-[100px] w-full items-center rounded-md border-2 bg-background p-4`}
      >
        {children}
        <div className="absolute -right-4 -top-4 flex gap-3 rounded-[14px] bg-muted p-2">
          {valuesForm?.modal && valuesForm.modal(id)}
          <button
            className="h-6 w-6 hover:text-secondary"
            ref={setActivatorNodeRef}
            type="button"
            {...listeners}
          >
            <MoveIcon className="h-6 w-6" />
          </button>
          <IconXboxX
            className="h-6 w-6 hover:cursor-pointer hover:text-destructive"
            onClick={() => onRemove(id)}
          />
        </div>
      </div>
    </li>
  );
}
