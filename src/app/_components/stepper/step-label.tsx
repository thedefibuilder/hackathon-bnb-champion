import React from 'react';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { useStepper } from './use-stepper';

interface StepLabelProps {
  isCurrentStep?: boolean;
  opacity: number;
  name?: string | React.ReactNode;
  description?: string | null;
}

const labelVariants = cva('', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-sm',
      lg: 'text-base'
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

const descriptionVariants = cva('', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-xs',
      lg: 'text-sm'
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

const CIRCLE_ALT = 'circle-alt';

const StepLabel = ({ isCurrentStep, opacity, name, description }: StepLabelProps) => {
  const { variant, styles, size, orientation } = useStepper();
  const shouldRender = !!name || !!description;

  return shouldRender ? (
    <div
      aria-current={isCurrentStep ? 'step' : undefined}
      className={cn(
        'stepper__step-label-container sm:w-10 sm:truncate',
        variant === CIRCLE_ALT && 'text-center',
        variant === CIRCLE_ALT && orientation === 'horizontal' && 'ms-0',
        variant === CIRCLE_ALT && orientation === 'vertical' && 'text-start',
        styles?.['step-label-container']
      )}
      style={{
        opacity
      }}
    >
      {!!name && <span className={cn(' min-h-10 text-center  !text-[12px]')}>{name}</span>}
      {!!description && (
        <span
          className={cn(
            'stepper__step-description',
            'text-muted-foreground',
            descriptionVariants({ size }),
            styles?.['step-description']
          )}
        >
          {description}
        </span>
      )}
    </div>
  ) : null;
};

export { StepLabel };
