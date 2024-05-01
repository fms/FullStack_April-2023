import { useSelector } from "react-redux";
import "./App.css";

import Toolbar from "./components/Toolbar";
import { countValue } from "./features/counter/counter-slice";
import { useAppSelector } from "./app/hooks";
import Input from "./components/Input";
import Output from "./components/Output";
import OutputList from "./components/OutputList";
import { Quotes } from "./features/quotes/Quotes";
import Box from "./components/Box";

function App() {
  const count = useAppSelector(countValue); // useState

  return (
    <>
      <div>
        <h1>{count}</h1>
        <Toolbar />
        {/* <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(addAmount(10))}>Add 10</button>
        </div> */}
        <Input />
        <Output />
        <OutputList />
        <Quotes />
        <Box />
      </div>
    </>
  );
}

export default App;
