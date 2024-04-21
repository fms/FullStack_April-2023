import { useCallback, useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList/ItemList";

function App() {
  const [checked, setChecked] = useState(false);
  const [startNumber, setStartNumber] = useState(0);

  // This function is recreated every time App rerenders (this is very similar to memo).
  // As a result, the ItemList component is also rerendered.
  // function createItems() {
  //   return [startNumber, startNumber + 1, startNumber + 2];
  // }

  // useCallback instead to cache the function and only recreate it when one of the
  // dependencies changes
  const createItems = useCallback(
    () => [startNumber, startNumber + 1, startNumber + 2],
    [startNumber]
  );

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

      <input
        type="number"
        onChange={(e) => {
          setStartNumber((e.target as HTMLInputElement).valueAsNumber);
        }}
        value={startNumber}
      />
      <ItemList getItems={createItems} />
    </>
  );
}

export default App;
