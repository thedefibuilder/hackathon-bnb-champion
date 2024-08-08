import React from 'react';

import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const rowVariants = cva(['flex flex-wrap', 'lg:-mx-4', 'md:-mx-4', 'sm:-mx-2'], {
  variants: {
    variant: {
      default: '',
      fluid: '!max-w-full'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

interface RowProps
  extends Pick<
      React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      'className' | 'children'
    >,
    VariantProps<typeof rowVariants> {}

export const GridRow = ({ children, className, variant }: RowProps) => {
  return <div className={cn(rowVariants({ variant, className }))}>{children}</div>;
};
