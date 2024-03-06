import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log("rendered useState");

  return <button onClick={handleClick}>count is {count}</button>;

  function handleClick() {
    setCount(count + 1);
    console.log(`useState: ${count}`);
  }
}

export default Counter;
