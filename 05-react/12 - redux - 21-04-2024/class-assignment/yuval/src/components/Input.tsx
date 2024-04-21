import React, { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  resetText,
  setAsYuval,
  setText,
  textValue,
} from "../features/text/textSlice";

export default function Input() {
  const text = useAppSelector(textValue);
  const dispatch = useAppDispatch();

  function handleInput(event: ChangeEvent<HTMLInputElement>): void {
    dispatch(setText((event.target as HTMLInputElement).value));
    // The same as:
    // const [text, setText] = useState("The initial text value")
    // setText((event.target as HTMLInputElement).value));
  }

  return (
    <>
      <input type="text" onChange={handleInput} value={text} />
      <button onClick={() => dispatch(resetText())}>Restore default</button>
      <button onClick={() => dispatch(setAsYuval())}>Yuval FTW</button>
    </>
  );
}
