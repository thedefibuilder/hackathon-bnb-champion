import { CircleXIcon } from "lucide-react";
import React from "react";

type TEditablSectionProps = {
  id: string;
  children: React.ReactNode;
  onRemove: (id: string) => void;
};

export default function EditableSection({
  id,
  children,
  onRemove,
}: TEditablSectionProps) {
  return (
    <div
      className={`flex min-h-[100px] items-center justify-center rounded-md border-2 p-4`}
    >
      {children}

      <button className="right-2 top-2" onClick={() => onRemove(id)}>
        <CircleXIcon className="h-6 w-6 fill-destructive" />
      </button>
    </div>
  );
}
