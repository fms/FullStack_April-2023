import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 2);
    setClickCount(clickCount + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 2);
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <div>Counter: {counter}</div>
      <div>Button Clicks: {clickCount}</div>
      <button onClick={handleAdd}>Add 2</button>
      <button onClick={handleSubtract}>Subtract 2</button>
    </div>
  );
}

export default Counter;
