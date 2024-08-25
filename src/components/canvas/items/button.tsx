import React from "react";
import { Button } from "@/components/ui/button";
import { FieldValues, useFormContext } from "react-hook-form";
import { TCanvasForm } from "@/lib/canvas-item";
import { TControlledFormFileInput } from "./heading";
import { cn } from "@/lib/utils";

export default function ButtonItem<TFormSchema extends FieldValues>({
  id,
}: TControlledFormFileInput<TFormSchema>) {
  const { control, setValue, watch } = useFormContext<TCanvasForm>();
  console.log(watch());

  const buttonItems = watch(id);
  const buttonText = buttonItems?.settings?.text || "Default Text";
  const buttonSize = buttonItems?.settings?.size || "default";
  const buttonAlign = buttonItems?.settings?.align || "justify-start";
  const linkPath = buttonItems?.settings?.link || "#";

  const containerClass = cn(
    "flex w-full mt-4",
    buttonAlign === "justify-start" && "justify-start",
    buttonAlign === "justify-center" && "justify-center",
    buttonAlign === "justify-end" && "justify-end",
  );

  return (
    <div className={containerClass}>
      <a href={linkPath} target="_blank">
        <Button size={buttonSize} type="button">
          {buttonText}
        </Button>
      </a>
    </div>
  );
}
