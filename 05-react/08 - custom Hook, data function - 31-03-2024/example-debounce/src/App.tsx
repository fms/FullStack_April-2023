import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { useDebouncedState } from "@wojtekmaj/react-hooks";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useDebounce("", 1000);

  // useDebouncedState comes from @wojtekmaj/react-hooks and provides a ready
  // made debounce hook
  const [useDebounceText, setUseDebounceText] = useDebouncedState("", 1000);

  function onInput(ev: React.FormEvent<HTMLInputElement>) {
    const newText = (ev.target as HTMLInputElement).value;
    setText(newText);
    setUseDebounceText(newText);
    setDebouncedText(newText);
  }

  // See the comment below for a cleaned up, minimal version of the same logic
  // useEffect(() => {
  //   console.log(`text is updated: ${text}`);
  //   const timeoutID = setTimeout(() => {
  //     console.log(`timeout - update debouncedText: ${text}`);
  //     setDebouncedText(text);
  //   }, 1000);

  //   return () => {
  //     console.log(`cleanup text is updated: ${text}`);
  //     clearTimeout(timeoutID);
  //   };
  // }, [text]);

  // Cleaned up version of the above useEffect():
  // useEffect(() => {
  //   const timeoutID = setTimeout(() => setDebouncedText(text), 1000);
  //   return () => clearTimeout(timeoutID);
  // }, [text]);

  return (
    <>
      <input type="text" onInput={onInput} />
      <p>Text: {text}</p>
      <p>Debounced Text: {debouncedText}</p>
      <p>Use Debounced Text: {useDebounceText}</p>
    </>
  );
}

export default App;
