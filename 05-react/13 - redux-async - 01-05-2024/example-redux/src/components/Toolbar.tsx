import { useDispatch } from "react-redux";
import {
  addAmount,
  decrement,
  delayedAddition,
  increment,
} from "../features/counter/counter-slice";
import { useAppDispatch } from "../app/hooks";

export default function Toolbar() {
  const dispatch = useAppDispatch(); // handleXXX

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(addAmount(10))}>Add 10</button>
      <button onClick={() => dispatch(delayedAddition(10))}>
        Delayed Add 10
      </button>
      <button onClick={() => dispatch(delayedAddition(0))}>Delayed fail</button>
    </div>
  );
}
