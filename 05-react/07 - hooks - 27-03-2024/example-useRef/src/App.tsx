import { useState } from "react";
import "./App.css";
import NamePanel from "./components/NamePanel/NamePanel";
import FocusedInput from "./components/FocusedInput/FocusedInput";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div>
        Dummy, trigger a new render:
        <input
          type="checkbox"
          name="dummy"
          id="dummy"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </div>
      <hr /> <NamePanel />
      <hr /> <FocusedInput />
      <hr /> <FocusedInput />
    </>
  );
}

export default App;
