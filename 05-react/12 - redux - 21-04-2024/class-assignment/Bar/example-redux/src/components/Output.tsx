import React from "react"
import { useAppSelector } from "../app/hooks"
import { textValue } from "../features/text/textSlice"

export default function Output() {
  // useState
  const text = useAppSelector(textValue)

  return <div>Output: {text}</div>
}
