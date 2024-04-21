import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import InputWithLabel from "./components/InputWithLabel/InputWithLabel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <InputWithLabel label="text  " />
      <InputWithLabel label="more text  " />
    </>
  );
}

export default App;
