import { Input } from "@/components/ui/input";
import {
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
  IconSettings,
} from "@tabler/icons-react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TCanvasForm } from "@/lib/canvas-item";
import { FormLabel, FormMessage } from "@/components/ui/form";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type TButtonSettingsDialogProps = {
  id: string;
};

export default function ButtonSettingsDialog({
  id,
}: TButtonSettingsDialogProps) {
  const { register, setValue, control } = useFormContext<TCanvasForm>();

  return (
    <Dialog>
      <DialogTrigger>
        <IconSettings className="hover:text-primary" />
      </DialogTrigger>
      <DialogContent className="rounded-[14px]">
        <DialogHeader>
          <DialogTitle className="text-left">Customize your Button</DialogTitle>
          <div className="h-6" />
          <>
            <div className="flex items-center gap-x-1">
              <FormLabel>Text</FormLabel>
              <FormMessage className="leading-none" />
            </div>
            <div className="h-0.5" />

            <Input
              {...register(`${id}.settings.text`)}
              onChange={(e) => setValue(`${id}.settings.text`, e.target.value)}
            />
          </>
          <div className="h-4" />
          <>
            <div className="flex items-center gap-x-1">
              <FormLabel>Link</FormLabel>
              <FormMessage className="leading-none" />
            </div>
            <div className="h-0.5" />

            <Input
              {...register(`${id}.settings.link`)}
              onChange={(e) => setValue(`${id}.settings.link`, e.target.value)}
            />
          </>
          <div className="h-4" />
          <FormLabel className="text-left">Size</FormLabel>
          <div className="h-0.5" />
          <Controller
            name={`${id}.settings.size`}
            control={control}
            render={({ field }) => (
              <ToggleGroup
                type="single"
                value={field.value}
                onValueChange={(newValue) => {
                  setValue(`${id}.settings.size`, newValue);
                }}
                className="justify-start rounded-md border p-2"
              >
                <ToggleGroupItem
                  value="lg"
                  aria-label="Toggle lg"
                  className="h-8"
                >
                  Lg
                </ToggleGroupItem>

                <ToggleGroupItem
                  value="default"
                  aria-label="Toggle default"
                  className="h-8"
                >
                  Md
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="sm"
                  aria-label="Toggle sm"
                  className="h-8"
                >
                  Sm
                </ToggleGroupItem>
              </ToggleGroup>
            )}
          />

          <div className="h-4" />
          <FormLabel className="text-left">Align Items</FormLabel>
          <div className="h-0.5" />
          <Controller
            name={`${id}.settings.align`}
            control={control}
            render={({ field }) => (
              <ToggleGroup
                type="single"
                value={field.value}
                onValueChange={(newValue) => {
                  setValue(`${id}.settings.align`, newValue);
                }}
                className="justify-start rounded-md border p-2"
              >
                <ToggleGroupItem
                  value="justify-start"
                  aria-label="Toggle left"
                  className="h-8"
                >
                  <IconAlignLeft />
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="justify-center"
                  aria-label="Toggle center"
                  className="h-8"
                >
                  <IconAlignCenter />
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="justify-end"
                  aria-label="Toggle right"
                  className="h-8"
                >
                  <IconAlignRight />
                </ToggleGroupItem>
              </ToggleGroup>
            )}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
