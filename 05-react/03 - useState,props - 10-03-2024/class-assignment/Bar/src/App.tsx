import { useState } from "react"
import "./styles.scss"
import Box from "./components/Box/Box"

function App() {
  const [color, setColor] = useState("red")

  function handleClick(backgroundColor: string) {
    setColor(backgroundColor);
  }

  return (
    <>
      <div style={{ backgroundColor: color }} className="mainBox">
      </div>
      <Box handleClick={handleClick} />
    </>
  )
}

export default App
