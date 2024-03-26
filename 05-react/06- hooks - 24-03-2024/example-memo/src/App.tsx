import { useEffect, useMemo, useState } from "react";
import "./App.css";
import MemoReferenceDemo from "./components/MemoReferenceDemo/MemoReferenceDemo";
import MemoSlowDemo from "./components/MemoSlowDemo/MemoSlowDemo";

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

      <hr />
      <MemoReferenceDemo />
      <hr />
      <MemoSlowDemo />
    </>
  );
}

export default App;
