import React, { useEffect, useState } from "react";

export default function useDebounce<T>(
  initialValue: T,
  delay: number
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(initialValue);
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutID = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeoutID);
  }, [value, delay]);

  return [debouncedValue, setValue];
}
