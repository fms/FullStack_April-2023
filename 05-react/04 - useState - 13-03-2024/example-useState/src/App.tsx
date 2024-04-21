import { useState } from "react";
import "./App.css";
import PhotoList2 from "./components/PhotoList2/PhotoList2";

interface SomeObject {
  age: number;
  data?: string;
  color: string;
}
function App() {
  let [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [active, setActive] = useState<boolean>(true);

  // Implicit object properties, taken from the default value
  const [obj, setObj] = useState({ age: 20, color: "blue", data: "" });

  // Explicit type specified in useState<type>() allows us to skip optional properties
  const [obj1, setObj1] = useState<SomeObject>({ age: 20, color: "blue" });

  const [arr, setArr] = useState([1, 2, 3]);

  function changeColor() {
    setObj({ ...obj, color: obj.color === "blue" ? "red" : "blue" });
    setObj1({ ...obj1, data: obj1.color === "blue" ? "green" : "blue" });
  }

  function extendArray() {
    setArr([...arr, arr.length + 1]);
  }

  function shrinkArray() {
    setArr(arr.slice(0, arr.length - 1));
  }

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </button>
        <br />
        <input onChange={(ev) => setName(ev.target.value)} type="text" />
        The name is {name}
        <br />
        <input type="checkbox" checked={active} content="Active" readOnly />
        <button onClick={() => setActive(!active)}>Toggle active</button>
        <br />
        {JSON.stringify(obj)}
        <br />
        {JSON.stringify(obj1)}
        <button onClick={changeColor}>Change Color</button>
        <br />
        {JSON.stringify(arr)}
        <button onClick={extendArray}>Extend Array</button>
        <button onClick={shrinkArray}>Shrink Array</button>
        <hr />
        <PhotoList2 />
      </div>
    </>
  );
}

export default App;
