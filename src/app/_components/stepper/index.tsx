'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

import { StepperProvider } from './context';
import { Step } from './step';
import { type TStepperProps, type TStepProps } from './types';
import { useStepper } from './use-stepper';

const Stepper = React.forwardRef<HTMLDivElement, TStepperProps>(
  (props, ref: React.Ref<HTMLDivElement>) => {
    const {
      className,
      children,
      orientation: orientationProp,
      state,
      responsive,
      checkIcon,
      errorIcon,
      onClickStep,
      mobileBreakpoint,
      expandVerticalSteps = false,
      initialStep = 0,
      size,
      steps,
      variant,
      styles,
      variables,
      scrollTracking = false,
      ...rest
    } = props;

    const childArr = React.Children.toArray(children);

    const items: React.ReactElement<TStepProps>[] = [];

    const footer = childArr.map((child, _index) => {
      if (!React.isValidElement<TStepProps>(child)) {
        throw new Error('Stepper children must be valid React elements.');
      }
      if (child.type === Step) {
        items.push(child);
        return null;
      }

      return child;
    });

    const stepCount = items.length;

    const clickable = !!onClickStep;

    return (
      <StepperProvider
        value={{
          initialStep,
          state,
          size,
          responsive,
          checkIcon,
          errorIcon,
          onClickStep,
          clickable,
          stepCount,
          variant: variant ?? 'circle',
          expandVerticalSteps,
          steps,
          scrollTracking,
          styles
        }}
      >
        <div
          ref={ref}
          className={cn(
            'stepper__main-container flex-row',
            'flex w-full flex-wrap',
            stepCount === 1 ? 'justify-end' : 'justify-between',
            className,
            styles?.['main-container']
          )}
          {...rest}
        >
          <VerticalContent>{items}</VerticalContent>
        </div>
        <HorizontalContent>{items}</HorizontalContent>
        {footer}
      </StepperProvider>
    );
  }
);

const VerticalContent = ({ children }: { children: React.ReactNode }) => {
  const { activeStep } = useStepper();

  const childArr = React.Children.toArray(children);
  const stepCount = childArr.length;

  return (
    <>
      {React.Children.map(childArr, (child, i) => {
        if (!React.isValidElement<TStepProps>(child)) return null;
        const isCompletedStep = child.props.isCompletedStep ?? i < activeStep;
        const isLastStep = i === stepCount - 1;
        const isCurrentStep = i === activeStep;

        const stepProps: Partial<TStepProps> & { index: number } = {
          index: i,
          isCompletedStep,
          isCurrentStep,
          isLastStep
        };

        return React.cloneElement(child, stepProps);
      })}
    </>
  );
};

const HorizontalContent = ({ children }: { children: React.ReactNode }) => {
  const { activeStep } = useStepper();
  const childArr = React.Children.toArray(children);

  if (activeStep >= childArr.length) {
    return null;
  }

  const activeChild = childArr[activeStep];
  if (!React.isValidElement<TStepProps>(activeChild)) {
    return null;
  }

  return (
    <>
      {React.Children.map(activeChild.props.children, (childNode) => {
        if (!React.isValidElement(childNode)) return null;
        return childNode;
      })}
    </>
  );
};
Stepper.displayName = 'Stepper';

export { Stepper };

export { type TStepItem, type TStepProps, type TStepperProps } from './types';
export { Step } from './step';

export { useStepper } from './use-stepper';
