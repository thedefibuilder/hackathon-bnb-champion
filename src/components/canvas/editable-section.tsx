import React from "react";

type TEditablSectionProps = {
  id: string;
  children: React.ReactNode;
};

export default function EditableSection({
  id,
  children,
}: TEditablSectionProps) {
  // Add remove button
  return (
    <div
      className={`flex min-h-[100px] items-center justify-center rounded-md border-2 p-4`}
    >
      {children}
    </div>
  );
}
