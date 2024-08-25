import { Input } from "@/components/ui/input";

import { IconSettings } from "@tabler/icons-react";

import { useFormContext } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TCanvasForm } from "@/lib/canvas-item";
import { FormLabel, FormMessage } from "@/components/ui/form";

type TImagedSettingsDialogProps = {
  id: string;
};

export default function ImageSettingsDialog({
  id,
}: TImagedSettingsDialogProps) {
  const { register, setValue } = useFormContext<TCanvasForm>();

  return (
    <Dialog>
      <DialogTrigger>
        <IconSettings className="hover:text-primary" />
      </DialogTrigger>
      <DialogContent className="rounded-[14px]">
        <DialogHeader>
          <DialogTitle className="text-left">Customize your Image</DialogTitle>
          <div className="h-6" />
          <>
            <div className="flex items-center gap-x-1">
              <FormLabel>Name</FormLabel>
              <FormMessage className="leading-none" />
            </div>
            <Input
              {...register(`${id}.settings.name`)}
              onChange={(e) => setValue(`${id}.settings.name`, e.target.value)}
            />
          </>
          <div className="h-4" />
          <div className="flex w-full items-center gap-3">
            <div className="flex w-1/2 flex-col">
              <div className="flex items-center gap-x-1">
                <FormLabel>Width</FormLabel>
                <FormMessage className="leading-none" />
              </div>
              <div className="h-2" />
              <Input
                {...register(`${id}.settings.width`)}
                onChange={(e) =>
                  setValue(`${id}.settings.width`, Number(e.target.value))
                }
              />
            </div>

            <div className="flex w-1/2 flex-col">
              <div className="flex items-center gap-x-1">
                <FormLabel>Height</FormLabel>
                <FormMessage className="leading-none" />
              </div>
              <div className="h-2" />
              <Input
                {...register(`${id}.settings.height`)}
                onChange={(e) =>
                  setValue(`${id}.settings.height`, Number(e.target.value))
                }
              />
            </div>
          </div>
          <div className="h-4" />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
