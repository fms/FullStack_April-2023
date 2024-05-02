import { ChangeEvent } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { setText, resetText, setAsShaked } from '../features/text/textSlice';
import { AppRootState } from '../app/store';
export default function InputText() {
  const text = useSelector((state: AppRootState) => state.text.value);

  const dispatch = useDispatch();
  function handleInput(event: ChangeEvent<HTMLInputElement>): void {
    dispatch(setText((event.target as HTMLInputElement).value));
  }
  return (
    <div>
      <input type='text' onChange={handleInput} value={text}/>
      <button onClick={() => dispatch(resetText())}>Reset Text</button>
      <button onClick={() => dispatch(setAsShaked())}>Set Text</button>
    </div>
  )
}
