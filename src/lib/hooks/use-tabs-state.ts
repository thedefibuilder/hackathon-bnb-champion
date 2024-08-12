import { useEffect, useMemo, useRef } from 'react';

import type { TTabState } from '../types/miscellaneous';

import useIsMounted from './use-is-mounted';

export function useTabsState<TName>(
  tabName: TName,
  tabsState: TTabState<TName>[],
  isFormvalid: boolean,
  setTabsState: React.Dispatch<React.SetStateAction<TTabState<TName>[]>>
) {
  const isMounted = useIsMounted();
  const submitButtonReference = useRef<HTMLButtonElement | null>(null);

  const isActiveTabError = useMemo(
    () => tabsState.find((tab) => tab.name === tabName)?.isError,
    [tabName, tabsState]
  );

  useEffect(() => {
    if (isMounted && isActiveTabError) {
      submitButtonReference && submitButtonReference.current?.click();
    }

    return () => {
      if (isMounted) {
        setTabsState((previousState) =>
          previousState.map((tab) =>
            tab.name === tabName ? { ...tab, isError: !isFormvalid } : tab
          )
        );
      }
    };
  }, [isMounted, tabName, isActiveTabError, isFormvalid, setTabsState]);

  return submitButtonReference;
}
