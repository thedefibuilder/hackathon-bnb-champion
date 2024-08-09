import React from 'react';

import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const containerVariants = cva(
  [
    'mx-auto w-full',
    'lg:max-w-[1272px] lg:px-4',
    'md:max-w-[672px] md:px-4',
    'sm:max-w-[312px] sm:px-2'
  ],
  {
    variants: {
      variant: {
        default: '',
        fluid: '!max-w-[100%] lg:px-8 md:px-8 sm:px-4',
        withAside: 'lg:max-w-full md:max-w-[77%] lg:ml-28 mr-0 sm:max-w-[87%]',
        withAsideFluid: 'sm:pl-20 sm:pr-0  !max-w-[100%] md:px-10'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export interface ContainerProps
  extends Pick<
      React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      'className' | 'children'
    >,
    VariantProps<typeof containerVariants> {
  id?: string;
}

export const GridContainer = ({ id, children, className, variant }: ContainerProps) => {
  const containerClasses = containerVariants({ variant });
  return (
    <div className={cn(containerClasses, className)} id={id ?? ''}>
      {children}
    </div>
  );
};
