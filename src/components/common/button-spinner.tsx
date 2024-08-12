import React from 'react';

import type { ButtonProps } from '@/components/ui/button';

import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type TButtonSpinner = ButtonProps & {
  isLoading: boolean;
  defaultContent: string;
  loadingContent: string;
  isDisabled?: boolean;
};

export default function ButtonSpinner({
  isLoading,
  defaultContent,
  loadingContent,
  className,
  isDisabled,
  ...otherProperties
}: TButtonSpinner) {
  return (
    <Button disabled={isLoading || isDisabled} className={cn(className)} {...otherProperties}>
      {isLoading ? (
        <div className='flex items-center gap-x-2.5'>
          <Loader2 className='h-5 w-5 animate-spin' />
          <span>{loadingContent}</span>
        </div>
      ) : (
        <p>{defaultContent}</p>
      )}
    </Button>
  );
}
