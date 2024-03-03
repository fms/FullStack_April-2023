import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';


function App() {
  const name = 'Shmuel';
  let counter = 0;
  const [realCounter, setRealCounter] = useState(0);

  function addOne() {
    counter++;
    console.log(`counter is ${counter}`);
  }

  function addOneState() {
    setRealCounter(realCounter + 1);
    console.log(`counter is ${realCounter}`);
  }



  console.log("render component");

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <p>Counter: {counter}</p>
      <p>Real Counter: {realCounter}</p>
      <button onClick={addOne}>Add 1</button>
      <button onClick={addOneState}>Add 1 state</button>
    </div>
  );
}

export default App;


