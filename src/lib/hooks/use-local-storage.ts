import { useState, useLayoutEffect, Dispatch, SetStateAction } from "react";

type StoredValue<T> = T | null;

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [StoredValue<T>, Dispatch<SetStateAction<StoredValue<T>>>] {
  const [storedValue, setStoredValue] = useState<StoredValue<T>>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue: Dispatch<SetStateAction<StoredValue<T>>> = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? (value as Function)(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  useLayoutEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setStoredValue(
          event.newValue ? (JSON.parse(event.newValue) as T) : initialValue,
        );
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, [initialValue, key]);

  return [storedValue, setValue];
}
