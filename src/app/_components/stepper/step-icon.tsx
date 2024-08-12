import * as React from 'react';

import type { IconType } from './types';

import { cva } from 'class-variance-authority';
import { CircleCheck, Loader2, X } from 'lucide-react';

import { cn } from '@/lib/utils';

import { useStepper } from './use-stepper';

interface StepIconProps {
  isCompletedStep?: boolean;
  isCurrentStep?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  isKeepError?: boolean;
  icon?: IconType;
  index?: number;
  checkIcon?: IconType;
  errorIcon?: IconType;
}

const iconVariants = cva('', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-4',
      lg: 'size-5'
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

const StepIcon = React.forwardRef<HTMLDivElement, StepIconProps>((props, ref) => {
  const { size } = useStepper();

  const {
    isCompletedStep,
    isCurrentStep,
    isError,
    isLoading,
    isKeepError,
    icon: CustomIcon,
    index,
    checkIcon: CustomCheckIcon,
    errorIcon: CustomErrorIcon
  } = props;

  const Icon = React.useMemo(() => CustomIcon, [CustomIcon]);
  const ErrorIcon = React.useMemo(() => CustomErrorIcon, [CustomErrorIcon]);
  const CheckIcon = React.useMemo(() => CustomCheckIcon, [CustomCheckIcon]);

  const renderIcon = () => {
    if (isCompletedStep) {
      return isKeepError && isError ? (
        <X className={cn(iconVariants({ size }))} />
      ) : (
        <CircleCheck className={cn(iconVariants({ size }))} />
      );
    }

    if (isCurrentStep) {
      if (isError) {
        return ErrorIcon ? (
          <ErrorIcon className={cn(iconVariants({ size }))} />
        ) : (
          <X className={cn(iconVariants({ size }))} />
        );
      } else if (isLoading) {
        return <Loader2 className={cn(iconVariants({ size }), 'animate-spin')} />;
      } else {
        return (
          <span ref={ref} className={cn('text-md text-center font-medium')}>
            {(index ?? 0) + 1}
          </span>
        );
      }
    }

    if (Icon) {
      return <Icon className={cn(iconVariants({ size }))} />;
    }

    return (
      <span ref={ref} className={cn('text-md text-center font-medium')}>
        {(index ?? 0) + 1}
      </span>
    );
  };

  return <div className={cn('step-icon-wrapper')}>{renderIcon()}</div>;
});

StepIcon.displayName = 'StepIcon';

export { StepIcon };
