import { useState } from "react";
import style from "./CounterButtons.module.scss";

function CounterButtons() {
  const [counter, isCounter] = useState(0);
  const [counterTwo, isCounterTwo] = useState(0);

  function addingTwo() {
    isCounter(counter + 1);
    isCounterTwo(counterTwo + 2);
  }

  function subtractingTwo() {
    if(counterTwo === 0) {
      return alert("Cant go under 0");
    }
    isCounterTwo(counterTwo - 2);
    isCounter(counter + 1);
  }

  return (
    <div className={style.counterButtonsWrapper}>
      <p>How much times the buttons has been clicked = {counter}</p>
      <div className={style.counterButtonDiv}>
        <button onClick={addingTwo} className={style.buttonCounter}>
          Add 2
        </button>
        <button onClick={subtractingTwo} className={style.buttonCounter}>
          Subtracting 2
        </button>
      </div>
      <p>Add or Subtracting = {counterTwo}</p>
    </div>
  );
}

export default CounterButtons;
