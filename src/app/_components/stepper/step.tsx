import * as React from 'react';

import type { Ref } from 'react';

import { HorizontalStep } from './horizontal-step';
import { type TStepProps } from './types';
import { useStepper } from './use-stepper';
import VerticalStep from './vertical-step';

interface StepInternalConfig {
  index: number;
  isCompletedStep?: boolean;
  isCurrentStep?: boolean;
  isLastStep?: boolean;
}

interface FullStepProps extends Omit<TStepProps, 'index'>, StepInternalConfig {}

const Step = React.forwardRef<HTMLDivElement, FullStepProps>((props, ref) => {
  const {
    children,
    description,
    icon,
    state,
    checkIcon,
    errorIcon,
    index,
    isCompletedStep,
    isCurrentStep,
    isLastStep,
    isKeepError,
    name,
    onClickStep
  } = props;

  const { isVertical, isError, isLoading, clickable } = useStepper();

  const hasVisited = isCurrentStep ?? isCompletedStep;

  const sharedProps = {
    isLastStep,
    isCompletedStep,
    isCurrentStep,
    index,
    isError,
    isLoading,
    clickable,
    name,
    description,
    hasVisited,
    icon,
    isKeepError,
    checkIcon,
    state,
    errorIcon,
    onClickStep
  };

  const renderStep = () => {
    return isVertical ? (
      <VerticalStep ref={ref as Ref<HTMLDivElement>} {...sharedProps}>
        {children}
      </VerticalStep>
    ) : (
      <HorizontalStep ref={ref as Ref<HTMLDivElement>} {...sharedProps} />
    );
  };

  return renderStep();
});

Step.displayName = 'Step';

export { Step };
