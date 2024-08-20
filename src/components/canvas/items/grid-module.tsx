import { Input } from "@/components/ui/input";

import {
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
  IconSettings,
  IconXboxX,
} from "@tabler/icons-react";

import { useFormContext } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TEditableSectionProps } from "../editable-section";
import { Slider } from "@/components/ui/slider";

export default function GridModule({ id, onRemove }: TEditableSectionProps) {
  const { register, setValue, watch } = useFormContext();

  const rowValue = watch(`items[${id}].row`, 1);
  const colValue = watch(`items[${id}].col`, 1);
  const gapColumns = watch(`items[${id}].gapColumns`, 0);
  const gapRows = watch(`items[${id}].gapRows`, 0);

  return (
    <>
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
                    setValue(`items[${id}].row`, value[0])
                  }
                />
                <Input
                  {...register(`items[${id}].row`)}
                  value={rowValue}
                  onChange={(e) =>
                    setValue(`items[${id}].row`, Number(e.target.value))
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
                    setValue(`items[${id}].col`, value[0])
                  }
                />
                <Input
                  {...register(`items[${id}].col`)}
                  value={colValue}
                  onChange={(e) =>
                    setValue(`items[${id}].col`, Number(e.target.value))
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
                    {...register(`items[${id}].gapColumns`)}
                    value={gapColumns}
                    onChange={(e) =>
                      setValue(
                        `items[${id}].gapColumns`,
                        Number(e.target.value),
                      )
                    }
                  />
                  <div className="h-2" />
                  <p>Columns</p>
                </div>
                <div className="w-full">
                  <Input
                    {...register(`items[${id}].gapRows`)}
                    value={gapRows}
                    onChange={(e) =>
                      setValue(`items[${id}].gapRows`, Number(e.target.value))
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
      <IconXboxX
        className="h-6 w-6 hover:text-destructive"
        onClick={() => onRemove(id)}
      />
    </>
  );
}
