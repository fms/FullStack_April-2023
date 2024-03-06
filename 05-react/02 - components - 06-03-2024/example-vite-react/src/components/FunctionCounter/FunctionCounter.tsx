import { useState } from "react";
import colors from "./FunctionCounter.module.scss";

export default function FunctionCounter() {
  const [count, setCount] = useState(0);
  console.log("rendered useState");

  function getColor(cnt: number) {
    if (cnt % 2 === 0) {
      return colors.even;
    }

    return colors.odd;
  }

  return (
    <>
      <button className={getColor(count)} onClick={handleClick}>
        Function count is {count}
      </button>
    </>
  );

  function handleClick() {
    setCount(count + 1);
    console.log(`useState: ${count}`);
  }
}
