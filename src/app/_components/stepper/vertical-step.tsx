'use client';

import React from 'react';

import { cn } from '@/lib/utils';

import { StepButtonContainer } from './step-button-container';
import { StepIcon } from './step-icon';
import { StepLabel } from './step-label';
import { type TStepSharedProps } from './types';
import { useStepper } from './use-stepper';

type VerticalStepProps = TStepSharedProps & {
  children?: React.ReactNode;
};

const verticalStepVariants = (options: { variant: string }): string => {
  const { variant } = options;
  if (variant === 'circle') {
    return 'circle-variant-class';
  } else if (variant === 'line') {
    return 'line-variant-class';
  } else {
    return '';
  }
};

// eslint-disable-next-line sonarjs/cognitive-complexity
const VerticalStep = React.forwardRef<HTMLDivElement, VerticalStepProps>((props, ref) => {
  const {
    index,
    isCompletedStep,
    isCurrentStep,
    name,
    description,
    icon,
    hasVisited,
    state,
    checkIcon: checkIconProp,
    errorIcon: errorIconProp,
    onClickStep
  } = props;
  const {
    checkIcon: checkIconContext,
    errorIcon: errorIconContext,
    isError,
    isLoading,
    variant,
    onClickStep: onClickStepGeneral,
    clickable,
    styles,
    orientation,
    steps,
    setStep,
    isLastStep: isLastStepCurrentStep
  } = useStepper();
  const opacity = hasVisited ? 1 : 0.8;
  const localIsLoading = isLoading ?? state === 'loading';
  const localIsError = isError ?? state === 'error';
  const isLastStep = index === steps.length - 1;
  const active = variant === 'line' ? (isCompletedStep ?? isCurrentStep) : isCompletedStep;
  const checkIcon = checkIconProp ?? checkIconContext;
  const errorIcon = errorIconProp ?? errorIconContext;

  const handleClick = () => {
    const stepIndex = index ?? 0;
    onClickStep?.(stepIndex, setStep);
    onClickStepGeneral?.(stepIndex, setStep);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const isClickable = clickable ?? !!onClickStep;

  return (
    <div
      ref={ref}
      className={cn(
        'stepper__vertical-step',
        verticalStepVariants({
          variant: variant?.includes('circle') ? 'circle' : 'line'
        }),
        isLastStepCurrentStep && 'gap-[var(--step-gap)]',
        styles?.['vertical-step']
      )}
      data-optional={steps[index ?? 0]?.optional}
      data-completed={isCompletedStep}
      data-active={active}
      data-clickable={isClickable}
      data-invalid={localIsError}
      onClick={handleClick}
      onKeyDown={onKeyDown}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
    >
      <div
        data-vertical={true}
        data-active={active}
        className={cn(
          'stepper__vertical-step-container',
          'flex items-center',
          variant === 'line' && 'border-s-[3px] py-2 ps-3 data-[active=true]:border-primary',
          styles?.['vertical-step-container']
        )}
      >
        <StepButtonContainer {...{ isLoading: localIsLoading, isError: localIsError, ...props }}>
          <StepIcon
            {...{
              index,
              isError: localIsError,
              isLoading: localIsLoading,
              isCurrentStep,
              isCompletedStep
            }}
            icon={icon}
            checkIcon={checkIcon}
            errorIcon={errorIcon}
          />
        </StepButtonContainer>
        <StepLabel name={name} description={description} {...{ isCurrentStep, opacity }} />
      </div>
      <div
        className={cn(
          'stepper__vertical-step-content',
          !isLastStep && 'min-h-4',
          variant !== 'line' && 'ps-[--step-icon-size]',
          variant === 'line' && orientation === 'vertical' && 'min-h-0',
          styles?.['vertical-step-content']
        )}
      ></div>
    </div>
  );
});

VerticalStep.displayName = 'VerticalStep';

export default VerticalStep;
