import React, { FormEvent, useRef } from "react";

export default function UncontrolledPassword() {
  const pass1 = useRef(null);
  const pass2 = useRef(null);
  function verifyPasswords(event: FormEvent<HTMLInputElement>): void {
    event.preventDefault();
    if (pass1.current.value == pass2.current.value) {
      console.log("match");
    } else {
      console.log("no match");
    }
  }

  return (
    <>
      <h2>Uncontrolled Password</h2>
      <label htmlFor="password1">Password:</label>{" "}
      <input type="password" name="password1" ref={pass1} />
      <label htmlFor="password2">Verify Password:</label>{" "}
      <input type="password" name="password2" ref={pass2} />
      <input type="submit" value="Submit" onClick={verifyPasswords} />
    </>
  );
}
