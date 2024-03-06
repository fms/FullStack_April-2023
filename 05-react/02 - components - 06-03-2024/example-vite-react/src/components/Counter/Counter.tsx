import { useState } from "react";
import logo from "@assets/react.svg";
import colors from "./counter.module.scss";

function Counter() {
  const [count, setCount] = useState(0);
  console.log("rendered useState");

  return (
    <>
      <button className={colors.colorred} onClick={handleClick}>
        count is {count}
      </button>
      <img src={logo} alt="" />
    </>
  );

  function handleClick() {
    setCount(count + 1);
    console.log(`useState: ${count}`);
  }
}

export default Counter;
