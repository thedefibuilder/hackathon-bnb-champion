import * as React from 'react';

import { cn } from '@/lib/utils';

import { StepButtonContainer } from './step-button-container';
import { StepIcon } from './step-icon';
import { StepLabel } from './step-label';
import { type TStepSharedProps } from './types';
import { useStepper } from './use-stepper';

// eslint-disable-next-line sonarjs/cognitive-complexity
const HorizontalStep = React.forwardRef<HTMLDivElement, TStepSharedProps>((props, ref) => {
  const {
    isError,
    isLoading,
    onClickStep,
    variant,
    clickable,
    checkIcon: checkIconContext,
    errorIcon: errorIconContext,
    styles,
    steps,
    setStep
  } = useStepper();

  const {
    index,
    isCompletedStep,
    isCurrentStep,
    hasVisited,
    icon,
    name,
    description,
    isKeepError,
    state,
    checkIcon: checkIconProp,
    errorIcon: errorIconProp
  } = props;

  const localIsLoading = isLoading ?? state === 'loading';
  const localIsError = isError ?? state === 'error';

  const opacity = hasVisited ? 1 : 0.8;

  const active = variant === 'line' ? (isCompletedStep ?? isCurrentStep) : isCompletedStep;

  const checkIcon = checkIconProp ?? checkIconContext;
  const errorIcon = errorIconProp ?? errorIconContext;

  return (
    <div
      aria-disabled={!hasVisited}
      className={cn(
        'stepper__horizontal-step relative flex items-center  transition-all duration-200 after:-mt-6 [&:not(:last-child)]:flex-1 [&:not(:last-child)]:after:h-[2px] [&:not(:last-child)]:after:bg-border [&:not(:last-child)]:after:transition-all [&:not(:last-child)]:after:duration-200 [&:not(:last-child)]:after:content-[""] data-[completed=true]:[&:not(:last-child)]:after:bg-primary data-[invalid=true]:[&:not(:last-child)]:after:bg-destructive',
        variant === 'circle-alt' &&
          'flex-1 flex-col justify-start [&:not(:last-child)]:after:relative [&:not(:last-child)]:after:end-[50%] [&:not(:last-child)]:after:start-[50%] [&:not(:last-child)]:after:top-[calc(var(--step-icon-size)/2)] [&:not(:last-child)]:after:order-[-1] [&:not(:last-child)]:after:w-[calc((100%-var(--step-icon-size))-(var(--step-gap)))]',
        variant === 'circle' &&
          '[&:not(:last-child)]:after:me-[var(--step-gap)] [&:not(:last-child)]:after:ms-[var(--step-gap)] [&:not(:last-child)]:after:flex-1',
        variant === 'line' && 'flex-1 flex-col border-t-[3px] data-[active=true]:border-primary',
        styles?.['horizontal-step']
      )}
      data-optional={steps[index ?? 0]?.optional}
      data-completed={isCompletedStep}
      data-active={active}
      data-invalid={localIsError}
      data-clickable={clickable}
      onClick={() => onClickStep?.(index ?? 0, setStep)}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          onClickStep?.(index ?? 0, setStep);
        }
      }}
      role='button'
      tabIndex={clickable ? 0 : undefined}
      ref={ref}
    >
      <div
        className={cn(
          'stepper__horizontal-step-container',
          'flex flex-col items-center justify-center lg:min-w-[120px]',
          variant === 'circle-alt' && 'flex-col justify-center gap-1',
          variant === 'line' && 'w-full',
          styles?.['horizontal-step-container']
        )}
      >
        <StepButtonContainer {...{ ...props, isError: localIsError, isLoading: localIsLoading }}>
          <StepIcon
            {...{
              index,
              isCompletedStep,
              isCurrentStep,
              isError: localIsError,
              isKeepError,
              isLoading: localIsLoading
            }}
            icon={icon}
            checkIcon={checkIcon}
            errorIcon={errorIcon}
          />
        </StepButtonContainer>
        <StepLabel name={name} description={description} {...{ isCurrentStep, opacity }} />
      </div>
    </div>
  );
});

HorizontalStep.displayName = 'HorizontalStep';

export { HorizontalStep };
