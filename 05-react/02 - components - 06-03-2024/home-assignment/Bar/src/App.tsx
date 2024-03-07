import ChangeColorDiv from "./components/changeColorDiv/changeColorDiv"
import Counter from "./components/counter/Counter"
import "./app.scss"
import { useState, MouseEvent } from "react"

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event: MouseEvent) {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  }

  return (
    <>
      <div className="container" onMouseMove={handleMouseMove}>
        <Counter />
        <ChangeColorDiv />
        <div className="follower" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
        </div>
      </div>
    </>
  )
}

export default App
