'use client';

import * as React from 'react';

import { ChevronsUpDown } from 'lucide-react';
import { type useForm } from 'react-hook-form';
import { type z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { type EFontNames } from '@/lib/customize-options';
import { type createProjectSchema } from '@/lib/schemas/create-project';
import { type TFontItem } from '@/lib/server-actions';

type TComboboxDemoProps = {
  handleAddFont: (font: string) => void;
  fonts?: TFontItem[];
  form: ReturnType<typeof useForm<z.infer<typeof createProjectSchema>>>;
};

export function ComboboxDemo({ handleAddFont, fonts, form }: TComboboxDemoProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className='w-full'>
        <Button
          variant='ghost'
          role='combobox'
          type='button'
          aria-expanded={open}
          className='w-full items-center justify-between rounded-[14px] px-2 hover:bg-muted'
        >
          {value ? fonts?.find((font) => font?.family === value)?.family : 'Select font...'}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full p-0'>
        <Command className='w-full'>
          <CommandInput placeholder='Search font...' />
          <CommandList>
            <CommandEmpty>No font found.</CommandEmpty>
            <CommandGroup className='w-full'>
              {fonts?.map((font) => (
                <CommandItem
                  key={font.family}
                  value={font.family}
                  onSelect={(currentValue: string) => {
                    const isValidFont = fonts?.some((font) => font.family === currentValue);
                    if (isValidFont) {
                      setValue(currentValue === value ? '' : currentValue);
                      setOpen(false);
                      handleAddFont(currentValue);
                      form.setValue('dapp.fontOption', currentValue as EFontNames);
                    }
                  }}
                >
                  {font.family}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
