import type { ClassValue } from 'clsx';
import type { EFeatureName } from '../features';
import type { EModuleName } from '../modules';

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { keccak256, stringToHex } from 'viem';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function separateCamelCase(input: string): string {
  return input.replaceAll(/([a-z])([A-Z])/g, '$1 $2');
}

export function generateArtifactKey(moduleName: EModuleName, featureNames: EFeatureName[]): string {
  const sortedFeatureNames = featureNames.sort();
  return keccak256(stringToHex(`${moduleName}-${sortedFeatureNames.join('-')}`));
}

export function stringifyResponse(response: unknown): string {
  if (typeof response === 'bigint') {
    return response.toString();
  }

  if (typeof response == 'object' && response !== null && !Array.isArray(response)) {
    return JSON.stringify(
      Object.entries(response)
        .map(([key, value]) => ({
          [key]: stringifyResponse(value)
        }))
        // eslint-disable-next-line unicorn/no-array-reduce
        .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
      null,
      2
    );
  }

  return JSON.stringify(response, null, 2);
}
