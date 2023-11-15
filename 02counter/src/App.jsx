import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(8);

  return (
    <>
      <h1>React with Amir {counter}</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => {
        counter<20 ? ++counter : counter;
        setCounter(counter);
      }}
      >Add</button>
      <button onClick={() => {
      counter>0 ? --counter : counter;
        setCounter(counter);
      }}
      >Remove</button>
    </>
  )
}

export default App
