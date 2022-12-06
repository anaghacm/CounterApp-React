import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  //counter - state using to store values

  function incrementCounter() {
    setCounter(counter + 1)
  }
  function decrementCounter() {
    setCounter(counter - 1)
  }
  function resetCounter() {
    setCounter(0)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>COUNTER APPLICATION</h2>
        <h1>{counter}</h1>
        <button onClick={incrementCounter} style={{backgroundColor:'green'}}>Increment</button>
        <button onClick={decrementCounter} style={{backgroundColor:'red'}}>Decrement</button>
        <button onClick={resetCounter}>Reset</button>
      </header>
    </div>
  );
}

export default App;
