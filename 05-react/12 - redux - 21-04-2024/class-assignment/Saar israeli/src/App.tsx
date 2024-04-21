// import { useSelector } from "react-redux";
import "./App.css";

// import Toolbar from "./components/Toolbar";
import { countValue } from "./features/counter/counter-slice";
import { useAppSelector } from "./app/hooks";
// import Input from "./components/Input";
// import Output from "./components/Output";
// import OutputList from "./components/OutputList";
// import { Quotes } from "./features/quotes/Quotes";
import BackgroundColor from "./components/BackgroundColor";

function App() {
  // const count = useAppSelector(countValue); // useState

  return (
    <>
      <div>
        <h1>{}</h1>
        <BackgroundColor />
      </div>
    </>
  );
}

export default App;
