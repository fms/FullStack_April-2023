import React, { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { textValue } from "../features/text/textSlice";
import { countValue } from "../features/counter/counter-slice";

export default function OutputList() {
  const text = useAppSelector(textValue);
  // const [count, setCount] = useState(5)
  const count = useAppSelector(countValue);

  function createList() {
    let result = [];
    for (let cnt = 0; cnt < count; cnt++) {
      result.push(<li key={cnt}>{text}</li>);
    }

    return result;
  }

  return (
    <div>
      {/* <input
        type="number"
        value={count}
        onChange={ev => setCount(ev.target.valueAsNumber)}
      /> */}
      <ul>{createList()}</ul>
    </div>
  );
}
