import { useDispatch } from "react-redux";
import {
  addAmount,
  decrement,
  increment,
} from "../features/counter/counter-slice";

export default function Toolbar() {
  const dispatch = useDispatch(); // handleXXX

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(addAmount(10))}>Add 10</button>
    </div>
  );
}
