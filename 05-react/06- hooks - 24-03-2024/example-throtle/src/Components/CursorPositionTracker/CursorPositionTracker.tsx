import { useState } from "react";
import { useThrottle } from "@react-hooks-hub/use-throttle";
import { useDebounce } from "@react-hooks-hub/use-debounce";

function CursorPositionTracker() {
  // Immediate cursor position update
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const [throttledCursorPosition, setThrottledCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  const [debouncedCursorPosition, setDebouncedCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  // Debounced cursor position update after 100ms of inactivity
  const updateDebounce = useDebounce(
    (e) => setDebouncedCursorPosition({ x: e.clientX, y: e.clientY }),
    100
  );

  // Throttled cursor position update, updated every 100ms
  const updateCursorPosition = useThrottle((e) => {
    setThrottledCursorPosition({ x: e.clientX, y: e.clientY });
  }, 100);

  // Track mouse cursor movement
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setCursorPosition({ x: e.clientX, y: e.clientY });
    updateCursorPosition(e);
    updateDebounce(e);
  }

  return (
    <div>
      <h1>Cursor Position Tracker</h1>
      <p>Move your mouse around to see the cursor's position:</p>
      <div
        onMouseMove={handleMouseMove}
        style={{
          width: "300px",
          height: "300px",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        <b>Immediate: </b>
        <span>X: {cursorPosition.x} </span>
        <span>Y: {cursorPosition.y}</span>

        <div>
          <b>Throttled: </b>
          <span>X: {throttledCursorPosition.x} </span>
          <span>Y: {throttledCursorPosition.y}</span>
        </div>

        <div>
          <b>Debounced: </b>
          <span>X: {debouncedCursorPosition.x} </span>
          <span>Y: {debouncedCursorPosition.y}</span>
        </div>
      </div>
    </div>
  );
}

export default CursorPositionTracker;
