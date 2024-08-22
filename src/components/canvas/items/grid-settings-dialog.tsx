import { Input } from "@/components/ui/input";

import {
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
  IconSettings,
} from "@tabler/icons-react";

import { useFormContext } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { TCanvasForm } from "@/lib/canvas-item";

type TGridSettingsDialogProps = {
  id: string;
};

export default function GridSettingsDialog({ id }: TGridSettingsDialogProps) {
  const { register, setValue, watch } = useFormContext<TCanvasForm>();

  const canvasItem = watch(id);
  const rowValue = canvasItem?.settings.row || 1;
  const colValue = canvasItem?.settings.col || 1;
  const gapColumns = canvasItem?.settings.gapColumns || 0;
  const gapRows = canvasItem?.settings.gapRows || 0;

  return (
    <Dialog>
      <DialogTrigger>
        <IconSettings className="hover:text-primary" />
      </DialogTrigger>
      <DialogContent className="rounded-[14px]">
        <DialogHeader>
          <DialogTitle>Customize your grid</DialogTitle>
          <div className="h-6" />

          <div>
            <h4 className="text-left">Row</h4>
            <div className="flex items-center gap-3">
              <Slider
                defaultValue={[rowValue]}
                max={100}
                step={1}
                onValueChange={(value) =>
                  setValue(`${id}.settings.row`, value[0])
                }
              />
              <Input
                {...register(`${id}.settings.row`)}
                value={rowValue}
                onChange={(e) =>
                  setValue(`${id}.settings.row`, Number(e.target.value))
                }
              />
            </div>
          </div>

          <div>
            <h4 className="text-left">Col</h4>
            <div className="flex items-center gap-3">
              <Slider
                defaultValue={[colValue]}
                max={100}
                step={1}
                onValueChange={(value) =>
                  setValue(`${id}.settings.col`, value[0])
                }
              />
              <Input
                {...register(`${id}.settings.col`)}
                value={colValue}
                onChange={(e) =>
                  setValue(`${id}.settings.col`, Number(e.target.value))
                }
              />
            </div>
          </div>

          <div>
            <h4 className="text-left">Gap</h4>
            <div className="h-4" />
            <div className="flex items-center gap-4">
              <div className="w-full">
                <Input
                  {...register(`${id}.settings.gapColumns`)}
                  value={gapColumns}
                  onChange={(e) =>
                    setValue(
                      `${id}.settings.gapColumns`,
                      Number(e.target.value),
                    )
                  }
                />
                <div className="h-2" />
                <p>Columns</p>
              </div>
              <div className="w-full">
                <Input
                  {...register(`${id}.settings.gapRows`)}
                  value={gapRows}
                  onChange={(e) =>
                    setValue(`${id}.settings.gapRows`, Number(e.target.value))
                  }
                />
                <div className="h-2" />
                <p>Rows</p>
              </div>
            </div>
          </div>

          <div className="border-b py-2" />

          <div>
            <div className="h-2" />
            <div className="flex items-center justify-between gap-4">
              <p>Justify Items</p>
              <div className="flex items-center">
                <IconAlignLeft />
                <IconAlignCenter />
                <IconAlignRight />
              </div>
            </div>
            <div className="h-2" />
            <div className="flex items-center justify-between gap-4">
              <p>Align Items</p>
              <div className="flex items-center">
                <IconAlignLeft />
                <IconAlignCenter />
                <IconAlignRight />
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
