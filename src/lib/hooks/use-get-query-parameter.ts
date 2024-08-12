import { useMemo } from 'react';

import { useSearchParams } from 'next/navigation';

export default function useGetQueryParameter(queryParameter: string) {
  const searchParameters = useSearchParams();

  return useMemo(() => searchParameters.get(queryParameter), [queryParameter, searchParameters]);
}
