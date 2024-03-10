import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/my_counter/Counter"; 
import Text from "./components/my_counter2/Text_test"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          this is my first app with React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <br />

        <Counter />
        

        {/* <Text /> */}


      </header>
    </div>
  );
}

export default App;
