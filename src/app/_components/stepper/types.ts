import type { LucideIcon } from 'lucide-react';

type IconType = LucideIcon | undefined;

type TStepItem = {
  id?: string;
  name?: string;
  description?: string;
  icon?: IconType;
  optional?: boolean;
};

interface TStepOptions {
  orientation?: 'vertical' | 'horizontal';
  state?: 'loading' | 'error';
  responsive?: boolean;
  checkIcon?: IconType;
  errorIcon?: IconType;
  onClickStep?: (step: number, setStep: (step: number) => void) => void;
  mobileBreakpoint?: string;
  variant?: 'circle' | 'circle-alt' | 'line';
  expandVerticalSteps?: boolean;
  size?: 'sm' | 'md' | 'lg';

  styles?: {
    'main-container'?: string;
    'horizontal-step'?: string;
    'horizontal-step-container'?: string;
    'vertical-step'?: string;
    'vertical-step-container'?: string;
    'vertical-step-content'?: string;
    'step-button-container'?: string;
    'step-label-container'?: string;
    'step-label'?: string;
    'step-description'?: string;
  };
  variables?: {
    '--step-icon-size'?: string;
    '--step-gap'?: string;
  };
  scrollTracking?: boolean;
}

interface TStepperProps extends TStepOptions {
  children?: React.ReactNode;
  className?: string;
  initialStep: number;
  steps: TStepItem[];
}

interface TStepProps extends React.HTMLAttributes<HTMLLIElement> {
  name?: string | React.ReactNode;
  description?: string;
  icon?: IconType;
  state?: 'loading' | 'error';
  checkIcon?: IconType;
  errorIcon?: IconType;
  isCompletedStep?: boolean;
  isKeepError?: boolean;
  index?: number;
  isCurrentStep?: boolean;
  isLastStep?: boolean;
  onClickStep?: (step: number, setStep: (step: number) => void) => void;
}

interface TStepSharedProps extends TStepProps {
  isLastStep?: boolean;
  isCurrentStep?: boolean;
  index?: number;
  hasVisited: boolean | undefined;
  isError?: boolean;
  isLoading?: boolean;
}

export type { IconType, TStepItem, TStepOptions, TStepperProps, TStepProps, TStepSharedProps };
