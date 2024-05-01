import {
  changeBackgroundColor,
  colorValue,
} from "../features/backgroundColorSlice/backgroundcolor-slice";
import { ChangeEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

function BackgroundColor() {
  const color = useAppSelector(colorValue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = color;
  },[color]);
  
  function handleInput(event: ChangeEvent<HTMLInputElement>): void {
    dispatch(changeBackgroundColor((event.target as HTMLInputElement).value));
  }

  return (
    <div className="myDiv">
      <input type="text" onChange={handleInput} value={color} />
    </div>
  );
}

export default BackgroundColor;
