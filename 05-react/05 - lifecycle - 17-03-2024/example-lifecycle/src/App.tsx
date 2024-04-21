import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  const [isShown, setIsShown] = useState<boolean>(true);

  return (
    <>
      <div>
        <button onClick={() => setIsShown((prev) => !prev)}>
          {isShown ? "Hide" : "Show"}
        </button>
        {isShown && <Counter />}
      </div>
    </>
  );
}

export default App;
