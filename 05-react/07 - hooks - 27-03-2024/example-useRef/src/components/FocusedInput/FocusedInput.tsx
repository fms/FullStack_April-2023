import React, { useEffect, useRef, useState } from "react";

export default function FocusedInput() {
  const [name, setName] = useState("");
  const inputElement = useRef(null);
  const prevName = useRef("");

  function focusText(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target: HTMLInputElement = inputElement.current!;
    // We don't modify the DOM element directly!
    // target.value = "Bar";
    target.focus();
  }

  useEffect(() => {
    prevName.current = name;
  }, [name]);
  return (
    <div>
      <input
        ref={inputElement}
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <div>
        The name is {name} and it used to be {prevName.current}
      </div>
      <button onClick={focusText}>Set Focus to text</button>
    </div>
  );
}
