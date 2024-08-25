import React, { useState } from "react";
import {
  useFormContext,
  type Control,
  type FieldValues,
  type Path,
  type UseFormClearErrors,
  type UseFormSetError,
  type UseFormSetValue,
} from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodErrors } from "@/lib/errors/zod-errors";
import { Input } from "@/components/ui/input";
import { TCanvasForm } from "@/lib/canvas-item";

type TControlledFormFileInput<TFormSchema extends FieldValues> = {
  accept?: string;
  maxSize?: number;
  id: string;
  setValue?: UseFormSetValue<TFormSchema>;
  setError?: UseFormSetError<TFormSchema>;
  clearErrors?: UseFormClearErrors<TFormSchema>;
};

export default function ImageItem<TFormSchema extends FieldValues>({
  maxSize = 5_000_000, // 5MB
  id,
}: TControlledFormFileInput<TFormSchema>) {
  const { control, setValue, setError, watch, clearErrors } =
    useFormContext<TCanvasForm>();

  const imageItems = watch(id);
  const imageWidth = imageItems?.settings?.width;
  const imageHeight = imageItems?.settings?.height;
  const name = imageItems?.settings.name;

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  function onUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      clearErrors(name);
      if (file.size >= maxSize) {
        setError(name, { type: "custom", message: zodErrors.file.maxSize(5) });
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const fileAsBase64 = reader.result?.toString();
        if (fileAsBase64) {
          setImagePreview(fileAsBase64);
          setValue(`${id}.settings.source`, fileAsBase64, {
            shouldValidate: true,
          });
        }
      };
    }
  }

  return (
    <>
      <FormField
        control={control}
        name={`${id}.settings.name`}
        render={() => (
          <FormItem>
            <div className="flex items-center gap-x-1">
              <FormLabel>Update Image</FormLabel>
              <FormMessage className="leading-none" />
            </div>
            <FormControl>
              {imagePreview ? (
                <div className="mt-4">
                  <img
                    src={imagePreview}
                    alt={name}
                    className="max-w-full"
                    width={imageWidth}
                    height={imageHeight}
                  />
                </div>
              ) : (
                <Input
                  type="file"
                  className="h-20 placeholder:italic"
                  onChange={onUpload}
                />
              )}
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
}
