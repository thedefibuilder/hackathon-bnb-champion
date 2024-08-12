import * as React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import { type TStepSharedProps } from './types';
import { useStepper } from './use-stepper';

type StepButtonContainerProps = TStepSharedProps & {
  children?: React.ReactNode;
};

const StepButtonContainer = ({
  isCurrentStep,
  isCompletedStep,
  children,
  isLoading: isLoadingProp,
  onClickStep
}: StepButtonContainerProps) => {
  const { clickable, isLoading: isLoadingContext, variant, styles } = useStepper();

  const currentStepClickable = clickable ?? !!onClickStep;

  if (variant === 'line') {
    return null;
  }

  return (
    <Button
      variant='ghost'
      type='button'
      tabIndex={currentStepClickable ? 0 : -1}
      className={cn(
        'stepper__step-button-container',
        'pointer-events-none rounded-full p-0',
        'h-[var(--step-icon-size)] w-[var(--step-icon-size)]',
        'flex h-10 w-10 items-center justify-center rounded-full border-2',
        'data-[clickable=true]:pointer-events-auto',
        'data-[active=true]:border-primary data-[active=true]:bg-primary',
        'data-[current=true]:border-primary',
        'data-[invalid=true]:border-destructive data-[invalid=true]:bg-destructive data-[invalid=true]:text-destructive-foreground',
        styles?.['step-button-container']
      )}
      aria-current={isCurrentStep ? 'step' : undefined}
      data-current={isCurrentStep}
      data-active={isCompletedStep}
      data-clickable={currentStepClickable}
    >
      {children}
    </Button>
  );
};

export { StepButtonContainer };
