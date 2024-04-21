import { FormEvent, useState } from "react";

export default function Controlled() {
  const [city, setCity] = useState("");

  function onChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setCity(ev.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(`Submitted with city: ${city}`);
  }

  return (
    <>
      <div>Controlled</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={city} onChange={onChange} />
          <input type="submit" content="Submit form" />
        </form>
        <div>City: {city}</div>
      </div>
    </>
  );
}
