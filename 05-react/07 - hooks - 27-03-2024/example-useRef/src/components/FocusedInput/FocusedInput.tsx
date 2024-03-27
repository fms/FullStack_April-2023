import React, { useRef, useState } from "react";

export default function FocusedInput() {
  const [name, setName] = useState("");
  const inputElement = useRef(null);

  function focusText(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target: HTMLInputElement = inputElement.current!;
    // We don't modify the DOM element directly!
    // target.value = "Bar";
    target.focus();
  }

  return (
    <div>
      <input
        ref={inputElement}
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <div>The name is {name}</div>
      <button onClick={focusText}>Set Focus to text</button>
    </div>
  );
}
