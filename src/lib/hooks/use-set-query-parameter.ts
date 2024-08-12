import { useCallback } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useSetQueryParameter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParameters = useSearchParams();

  const createQueryParameter = useCallback(
    (name: string, value: string) => {
      const parameters = new URLSearchParams(searchParameters.toString());
      parameters.set(name, value);

      return parameters.toString();
    },
    [searchParameters]
  );

  // eslint-disable-next-line sonarjs/prefer-immediate-return
  function setQueryParameter(name: string, value: string) {
    router.push(pathname + '?' + createQueryParameter(name, value));
  }

  return { pathname, createQueryParameter, setQueryParameter };
}
