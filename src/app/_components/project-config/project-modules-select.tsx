import React from 'react';

import type { EModuleName } from '@/lib/modules';

import { PackageCheck, PackagePlus } from 'lucide-react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { modules } from '@/lib/modules';
import { cn } from '@/lib/utils';

type TModulesSelectProps = {
  activeModules: EModuleName[];
  toggleModule: (m: EModuleName) => void;
};

export default function ProjectModulesSelect({ activeModules, toggleModule }: TModulesSelectProps) {
  return (
    <ToggleGroup
      type='multiple'
      className='flex w-full flex-col justify-start gap-5 lg:flex-row lg:flex-wrap md:flex-row md:flex-wrap'
    >
      {modules.map((module) => (
        <ToggleGroupItem
          key={module.name}
          value={module.name}
          className={cn(
            'data-[state=on]:bg-primary-dark flex h-max w-full flex-[1_0_calc(32.333%-10px)] flex-col items-center gap-y-2.5 whitespace-normal rounded-3xl border-2 p-2.5 text-center data-[state=on]:border-primary-light data-[state=on]:text-primary lg:hover:border-primary-light lg:hover:bg-primary-foreground lg:hover:text-primary-light md:w-[47%] xl:flex-[1_0_calc(23.333%-10px)]',
            activeModules.includes(module.name) &&
              'border-primary-light bg-primary-foreground text-primary-light'
          )}
          onClick={() => toggleModule(module.name)}
          disabled={!module.available}
        >
          <div className='md:h-2' />
          <div className='flex items-center gap-2 md:flex-col'>
            <module.icon className='h-7 w-7 shrink-0' />
            <span className='text-xl'>{module.name}</span>
          </div>
          <span className='px-2 text-muted-foreground md:min-h-20 md:text-sm'>
            {module.description}
          </span>
          <div className='h-2' />
          {activeModules.includes(module.name) ? (
            <div className='flex w-1/2 items-center justify-center gap-2 rounded bg-primary-light py-2 font-bold text-primary md:w-full md:px-2 md:py-1'>
              <PackageCheck className='w-[20%]' />
              <p className='font-bold'>Module Included</p>
            </div>
          ) : (
            <div
              className={cn([
                'flex w-1/2 items-center justify-center gap-2 rounded  px-2 py-2 font-bold text-white md:w-full md:py-1',
                module.available ? 'bg-primary' : 'bg-secondary-dark'
              ])}
            >
              <PackagePlus />
              <p className='font-bold'>{module.available ? 'Add Module' : 'Coming Soon'}</p>
            </div>
          )}
          <div className='md:h-2' />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
