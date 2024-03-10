import { useState } from "react";
import './Style.css';


function Counter() {
  const [count, setCount] = useState(0);
  

  return <button className ="color-red" onClick={handleClick}>count is {count}</button>;

  function handleClick() {
    setCount(count + 1);


  }


}


export default Counter;

