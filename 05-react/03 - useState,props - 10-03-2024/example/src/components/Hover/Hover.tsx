import { useState } from "react";

export default function Hover() {
  const [isActive, setIsActive] = useState(false);
  function toggleHover() {
    setIsActive((isActive) => !isActive);
  }

  return (
    <div>
      <p
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        style={{ backgroundColor: isActive ? "red" : "initial" }}
      >
        Move over this text to change the hover state
      </p>
    </div>
  );
}
