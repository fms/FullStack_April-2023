import { useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { textValue } from "../features/text/textSlice";
import { useAppSelector } from "../app/hooks";

interface ErrorProps {
  error: string;
}

// This is the Error component. It's also responsible for clearing the error state
export default function Error({ error }: ErrorProps) {
  // This hook provides a method for resetting the error state
  const { resetBoundary } = useErrorBoundary();

  // Reset the error state when text is changed
  const text = useAppSelector(textValue);
  useEffect(resetBoundary, [text]);

  // The actual content displayed when there's an error
  return <div>Something went wrong: {error}</div>;
}
