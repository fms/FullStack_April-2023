import React, { ChangeEvent, useState } from "react"
import './App.css';

function App() {
  const [name, setName] = useState("")

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  return (
    <div className="App">
      <form>
        <label>
          Name:
          <input onChange={event => handleChange(event)} placeholder="Name" type="text" />
        </label>
        <h1>{name}</h1>
      </form>
    </div>
  );
}

export default App;
