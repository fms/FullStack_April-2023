import React, { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  resetText,
  setAsYuval,
  setText,
  textValue,
} from "../features/text/textSlice";
import { setAsLeonardo, textValue as text2Value, setText as setText2 } from "../features/text2/textSlice2";


export default function Input() {
  const text = useAppSelector(textValue);
  const text2 = useAppSelector(text2Value);
  const dispatch = useAppDispatch();

  function handleInput(event: ChangeEvent<HTMLInputElement>): void {
    dispatch(setText((event.target as HTMLInputElement).value));
    
    // The same as:
    // const [text, setText] = useState("The initial text value")
    // setText((event.target as HTMLInputElement).value));
  }
function handleInput2(event: ChangeEvent<HTMLInputElement>) {dispatch(setText2((event.target as HTMLInputElement).value));}
  return (
    <>
      <input type="text" onChange={handleInput} value={text} />
      <button onClick={() => dispatch(resetText())}>Restore default</button>
      <button onClick={() => dispatch(setAsYuval())}>Yuval FTW</button>
      
      <input type="text" onChange={handleInput2} value={text2} />
      <button onClick={() => dispatch(setAsLeonardo())}>Leonardo</button>
    </>
    
  );
}
