import { zodErrors } from "@/lib/errors/zod-errors";
import { useState } from "react";
import {
  FieldValues,
  UseFormClearErrors,
  useFormContext,
  UseFormSetError,
  UseFormSetValue,
  Path,
} from "react-hook-form";
import { FormControl, FormField, FormItem } from "../ui/form";
import { IconFileZip } from "@tabler/icons-react";
import { Input } from "../ui/input";

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject("Failed to convert file to base64");
      }
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

type TControlledFormFileInput<TFormSchema extends FieldValues> = {
  accept?: string;
  maxSize?: number;
  id: Path<TFormSchema>;
  setValue?: UseFormSetValue<TFormSchema>;
  setError?: UseFormSetError<TFormSchema>;
  clearErrors?: UseFormClearErrors<TFormSchema>;
};

export default function UploadZip<TFormSchema extends FieldValues>({
  maxSize = 5_000_000, // 5MB
  id,
}: TControlledFormFileInput<TFormSchema>) {
  const { setValue, setError, clearErrors, watch } =
    useFormContext<TFormSchema>();
  const zipFile = watch(id);
  const [zipFileName, setZipFileName] = useState<string | null>(null);

  const onUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      clearErrors(id);
      if (file.size > maxSize) {
        setError(id, {
          type: "custom",
          message: zodErrors.file.maxSize(maxSize),
        });
        return;
      }

      try {
        const base64 = await fileToBase64(file);
        setZipFileName(file.name);
        setValue(id as Path<TFormSchema>, base64 as any, {
          shouldValidate: true,
        });
      } catch (error) {
        console.error("Error converting file to base64:", error);
      }
    }
  };

  return (
    <FormField
      name={id}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            {zipFileName ? (
              <div className="mt-2 flex h-[190px] items-center justify-center rounded border-4 border-dotted border-primary">
                <p className="text-lg font-semibold">{zipFileName}</p>
              </div>
            ) : (
              <div className="relative mt-2 h-[190px] w-full rounded border-4 border-dotted border-primary">
                <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center">
                    <IconFileZip
                      stroke={2}
                      className="mb-2 h-12 w-12 text-primary"
                    />
                    <p className="w-3/5 text-xs">
                      Add your template files in a ZIP folder.
                    </p>
                    <div className="h-4" />
                    <div className="rounded bg-primary px-4 py-2">
                      <p className="text-white">Select a ZIP file</p>
                    </div>
                  </div>
                </div>
                <Input
                  type="file"
                  accept=".zip"
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
