import { useState } from "react";
import colors from "./TrinaryCounter.module.scss";

function TrinaryCounter() {
  const [count, setCount] = useState(0);
  console.log("rendered useState");

  return (
    <>
      <button
        className={count % 2 === 0 ? colors.even : colors.odd}
        onClick={handleClick}
      >
        Trinary count is {count}
      </button>
    </>
  );

  function handleClick() {
    setCount(count + 1);
    console.log(`useState: ${count}`);
  }
}

export default TrinaryCounter;
