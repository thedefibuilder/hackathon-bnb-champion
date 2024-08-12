/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

import React from 'react';

import type { EFeatureName } from '@/lib/features';
import type { EModuleName } from '@/lib/modules';

import { CircleCheckBig, HandMetal } from 'lucide-react';

import { Switch } from '@/components/ui/switch';
import { moduleFeatures } from '@/lib/features';
import { cn } from '@/lib/utils';

type TFeaturesSelectProps = {
  activeFeatures: EFeatureName[];
  moduleName: EModuleName;
  toggleModuleFeature: (moduleName: EModuleName, featureName: EFeatureName) => void;
  testnetMode?: boolean;
};

export default function ProjectFeaturesSelect({
  moduleName,
  testnetMode,
  activeFeatures,
  toggleModuleFeature
}: TFeaturesSelectProps) {
  const isFeatureActive = (featureName: EFeatureName) => activeFeatures.includes(featureName);

  return (
    <div className='rounded-[16px] border border-primary-light p-4'>
      <h2 className='pl-2 text-2xl font-bold'>{moduleName} Features</h2>
      <div className='h-6' />
      <ul className='flex flex-wrap gap-5'>
        {moduleFeatures[moduleName].map((feature) => (
          <li
            key={feature.name}
            className={cn(
              'min-w-1/2 flex flex-[1_0_calc(31.333%-10px)] flex-col items-start gap-y-2.5 whitespace-normal rounded-3xl border-2 px-6 py-2.5',
              {
                'border-destructive hover:bg-destructive': !feature.available,
                'border-primary bg-primary-foreground':
                  isFeatureActive(feature.name) && !feature.isPro,
                'border-secondary bg-secondary-foreground':
                  isFeatureActive(feature.name) && feature.isPro
              }
            )}
          >
            <div className='h-2' />
            <div className='flex w-full items-center justify-between gap-4'>
              <div className='flex gap-3'>
                <feature.icon
                  className={cn([
                    'h-7 w-7 shrink-0',
                    isFeatureActive(feature.name) && !feature.isPro && 'text-primary',
                    isFeatureActive(feature.name) && feature.isPro && 'text-secondary'
                  ])}
                />
                <span className='text-lg font-medium'>{feature.name}</span>
              </div>
              <div className='flex items-center gap-4 md:flex-col'>
                <Switch
                  id={feature.name}
                  checked={isFeatureActive(feature.name)}
                  onClick={() => toggleModuleFeature(moduleName, feature.name)}
                  className={cn([
                    feature.isPro
                      ? 'data-[state=checked]:bg-secondary-dark lg:hover:border-secondary lg:hover:bg-secondary-foreground'
                      : 'data-[state=checked]:bg-primary-light lg:hover:border-primary-light lg:hover:bg-primary',
                    'md:order-0 order-1'
                  ])}
                />
                <p className='text-s order-0 block md:order-1 '>
                  {testnetMode || feature.price === 0 ? 'Free' : `${feature.price} $`}
                </p>
              </div>
            </div>
            <div className='h-1' />
            <span className='min-h-10 text-left text-sm text-muted-foreground'>
              {feature.description}
            </span>
            {feature.isPro && (
              <span className='flex items-center gap-2 rounded border border-secondary-dark bg-secondary-dark px-2 py-1 text-secondary'>
                <HandMetal className='h-4 w-4' />
                <p>Pro Feature</p>
              </span>
            )}
            {feature.required && (
              <span className='text-primary-dark flex items-center gap-2 rounded border border-primary bg-primary px-2 py-1 '>
                <CircleCheckBig className='h-4 w-4' />
                <p>Required</p>
              </span>
            )}
            {!feature.available && <span className='text-xs text-destructive'>Coming soon</span>}
            <div className='h-2' />
          </li>
        ))}
      </ul>
    </div>
  );
}
