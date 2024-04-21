"use client";

import { FormEvent, useRef, useState } from "react";

export default function Uncontrolled() {
  const cityElement = useRef(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(`Submitted with city: ${cityElement.current.value}`);
  }

  return (
    <>
      <div>Uncontrolled</div>
      <div>
        <form onSubmit={handleSubmit} method="post">
          <input type="text" ref={cityElement} />
          <input type="submit" content="Submit form" name="send" />
        </form>
        {/* <div>City: {city}</div> */}
      </div>
    </>
  );
}
