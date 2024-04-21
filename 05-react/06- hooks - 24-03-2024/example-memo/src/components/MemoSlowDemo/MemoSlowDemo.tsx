import { useMemo, useState } from "react";

export default function MemoSlowDemo() {
  const text = "This is a long text";
  const [length, setLength] = useState(5);

  function onChange(ev: React.FormEvent<HTMLInputElement>) {
    const newLength = (ev.target as HTMLInputElement).valueAsNumber;
    if (newLength >= 0) {
      setLength(() => newLength);
    }
  }

  // This will rerun the slowRunning() function on each render. This is checked by
  // function reference and since it's a new function, the value is considered changed.
  //   const slowText = slowRunning();

  // Instead, useMemo to cache the value and rerun the function only when
  // the dependencies are updated.
  const slowText = useMemo(() => slowRunning(), [length]);

  function slowRunning() {
    console.log("slow");
    for (let i = 0; i <= 100000000; i++);
    return text.substring(0, length);
  }

  return (
    <div>
      <input type="number" onChange={onChange} value={length} />
      <p>Text: {text}</p>
      <p>Slow Text: {slowText}</p>
    </div>
  );
}
