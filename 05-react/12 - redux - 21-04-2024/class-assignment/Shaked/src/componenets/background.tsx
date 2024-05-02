import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootState } from '../app/store';
import { changeColor, initialColor } from '../features/background/background';

export default function BackGroundInput() {
  const color = useSelector((state: AppRootState) => state.background.color);
  const dispatch = useDispatch();

  function handleInput(event: ChangeEvent<HTMLInputElement>): void {
    dispatch(changeColor(event.target.value));
  }

  return (
    <div style={{ backgroundColor: color}}>
      <input type='text' onChange={handleInput} value={color} />
      <button onClick={() => dispatch(initialColor())}>Reset BG Color</button>
      <button onClick={() => dispatch(changeColor("red"))}>Set Red Color</button>
    </div>
  );
}
