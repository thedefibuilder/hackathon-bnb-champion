import React, { useState } from "react";
import {
  useFormContext,
  type FieldValues,
  type UseFormClearErrors,
  type UseFormSetError,
  type UseFormSetValue,
  type Path,
} from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { zodErrors } from "@/lib/errors/zod-errors";
import { Input } from "@/components/ui/input";
import { IconPhoto } from "@tabler/icons-react";

type TControlledFormFileInput<TFormSchema extends FieldValues> = {
  accept?: string;
  maxSize?: number;
  id: Path<TFormSchema>;
  setValue?: UseFormSetValue<TFormSchema>;
  setError?: UseFormSetError<TFormSchema>;
  clearErrors?: UseFormClearErrors<TFormSchema>;
};

export default function UploadeImage<TFormSchema extends FieldValues>({
  maxSize = 5_000_000, // 5MB
  id,
}: TControlledFormFileInput<TFormSchema>) {
  const { control, setValue, setError, watch, clearErrors } =
    useFormContext<TFormSchema>();

  const imageItems = watch(id);
  const imageWidth = imageItems?.settings?.width;
  const imageHeight = imageItems?.settings?.height;
  const name = imageItems?.settings?.name;

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  function onUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      clearErrors(id); // Clear errors for the whole file input path
      if (file.size >= maxSize) {
        setError(id, { type: "custom", message: zodErrors.file.maxSize(5) });
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const fileAsBase64 = reader.result?.toString();
        if (fileAsBase64) {
          setImagePreview(fileAsBase64);
          setValue(id, fileAsBase64 as any, { shouldValidate: true }); // Use id directly
        }
      };
    }
  }

  return (
    <FormField
      control={control}
      name={id} // Use id directly here
      render={() => (
        <FormItem>
          <div className="flex items-center gap-x-1">
            <FormMessage className="leading-none" />
          </div>
          <FormControl>
            {imagePreview ? (
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt={name || "Preview"}
                  className="h-[190px] w-full max-w-full rounded"
                  width={imageWidth}
                  height={imageHeight}
                />
              </div>
            ) : (
              <div className="relative h-[190px] w-full rounded border-4 border-dotted border-primary">
                <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center">
                    <IconPhoto
                      stroke={2}
                      className="mb-2 h-12 w-12 text-primary"
                    />
                    <p className="w-3/5 text-xs">
                      Add a 4:3 ratio Banner for your template. Max 5mb.
                    </p>
                    <div className="h-4" />
                    <div className="rounded bg-primary px-4 py-2">
                      <p className="text-white">Select Image</p>
                    </div>
                  </div>
                </div>
                <Input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 h-[183px] cursor-pointer opacity-0"
                  onChange={onUpload}
                />
              </div>
            )}
          </FormControl>
        </FormItem>
      )}
    />
  );
}
