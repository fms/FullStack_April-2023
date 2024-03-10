import { useState } from "react"
import "./styles.scss"
import Box from "./components/Box/Box"

function App() {
  const [color, setColor] = useState("redBox")

  function handleClick(className: string) {
    setColor(className);
  }

  return (
    <>
      <div className={color}>
      </div>
      <Box handleClick={handleClick} />
    </>
  )
}

export default App
