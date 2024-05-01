import { useAppSelector } from "../app/hooks";
import { textValue } from "../features/text/textSlice";

export default function Output() {
  const text = useAppSelector(textValue);
  if (text === "aa") {
    throw "We have an aa error";
  }

  return <div>Output: {text}</div>;
}
