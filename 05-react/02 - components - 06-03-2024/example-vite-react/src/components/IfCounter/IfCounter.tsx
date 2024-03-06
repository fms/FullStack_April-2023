import { useState } from "react";
import colors from "./IfCounter.module.scss";

function IfCounter() {
  const [count, setCount] = useState(0);
  console.log("rendered useState");

  let color = colors.odd;
  if (count % 2 === 0) {
    color = colors.even;
  }

  return (
    <>
      <button className={color} onClick={handleClick}>
        If count is {count}
      </button>
    </>
  );

  function handleClick() {
    setCount(count + 1);
    console.log(`useState: ${count}`);
  }
}

export default IfCounter;
