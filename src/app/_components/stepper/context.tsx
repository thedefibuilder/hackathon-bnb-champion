import React, { useState } from 'react';

import type { TStepperProps } from './types';

interface TStepperContextValue extends TStepperProps {
  clickable?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  isVertical?: boolean;
  stepCount?: number;
  expandVerticalSteps?: boolean;
  activeStep: number;
  initialStep: number;
}

type TStepperContextProviderProps = {
  value: Omit<TStepperContextValue, 'activeStep'>;
  children: React.ReactNode;
};

const defaultFunction = () => {
  console.error('Function not implemented');
};

const StepperContext = React.createContext<
  TStepperContextValue & {
    nextStep: () => void;
    prevStep: () => void;
    resetSteps: () => void;
    setStep: (step: number) => void;
  }
>({
  steps: [],
  activeStep: 0,
  initialStep: 0,
  nextStep: defaultFunction,
  prevStep: defaultFunction,
  resetSteps: defaultFunction,
  setStep: defaultFunction
});

const StepperProvider = ({ value, children }: TStepperContextProviderProps) => {
  const isError = value.state === 'error';
  const isLoading = value.state === 'loading';

  const [activeStep, setActiveStep] = useState(value.initialStep);

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  const resetSteps = () => {
    setActiveStep(value.initialStep);
  };

  const setStep = (step: number) => {
    setActiveStep(step);
  };

  return (
    <StepperContext.Provider
      value={{
        ...value,
        isError,
        isLoading,
        activeStep,
        nextStep,
        prevStep,
        resetSteps,
        setStep
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};

export { StepperProvider, StepperContext };
