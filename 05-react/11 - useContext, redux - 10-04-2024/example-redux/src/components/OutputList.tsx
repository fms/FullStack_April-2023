import React, { useState } from "react"
import { useAppSelector } from "../app/hooks"
import { textValue } from "../features/text/textSlice"

export default function OutputList() {
  const text = useAppSelector(textValue)
  const [count, setCount] = useState(5)

  function createList() {
    let result = []
    for (let cnt = 0; cnt < count; cnt++) {
      result.push(<li>{text}</li>)
    }

    return result
  }

  return (
    <div>
      <input
        type="number"
        value={count}
        onChange={ev => setCount(ev.target.valueAsNumber)}
      />
      <ul>{createList()}</ul>
    </div>
  )
}
