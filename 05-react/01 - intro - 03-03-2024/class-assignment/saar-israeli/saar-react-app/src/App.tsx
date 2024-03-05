import React, { useState } from "react";
import CounterButton from "./components/CounterButton";
import DarkMode from "./components/DarkTheme";
import "./App.css";

function App() {

  return (
    <div className="App">
      <h1>Welcome to my react app!</h1>
      <CounterButton plusButtonText="Plus 1"
                      minusButtonText="Minus 1" />
      <DarkMode />
    </div>
  );
}

export default App;
