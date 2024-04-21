import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function ControlledPassword() {
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [match, setMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // const [passwords, setPasswords] = useState({pass1: "", pass2: ""});
  function verifyPasswords(event: FormEvent<HTMLInputElement>): void {
    event.preventDefault();
    if (pass1 == pass2) {
      console.log("match");
    } else {
      console.log("no match");
    }
  }

  function handlePass1Change(event: ChangeEvent<HTMLInputElement>): void {
    setPass1(event.target.value);
  }

  function handlePass2Change(event: ChangeEvent<HTMLInputElement>): void {
    setPass2(event.target.value);
  }

  useEffect(() => setMatch(pass1 == pass2), [pass1, pass2]);

  function toggleShowPassword(): void {
    setShowPassword(!showPassword);
  }

  // function handleChange(event: ChangeEvent<HTMLInputElement>): void {
  //   const newPassword = {...passwords};
  //   newPassword[event.target.name] = (string) (event.target.value);
  //   setPasswords(newPassword);
  // }

  return (
    <>
      <h2>Controlled Password</h2>
      <label htmlFor="pass">Password:</label>{" "}
      <input
        type={showPassword ? "text" : "password"}
        name="pass1"
        value={pass1}
        onChange={handlePass1Change}
      />
      <button onClick={toggleShowPassword}>Show/Hide</button>
      <label htmlFor="pass2">Verify Password:</label>{" "}
      <input
        type="password"
        name="pass2"
        value={pass2}
        onChange={handlePass2Change}
      />
      <input type="submit" value="Submit" onClick={verifyPasswords} />
      <div>{match ? "Match" : "No match"}</div>
    </>
  );
}
