import { useState } from 'react'
import './App.css'
import { useRef } from 'react';
import StopWatch from './demo/stopWatch';

const App = () => {

  let btnRef = useRef();

  const[count,setCount] = useState(0);

  const increment = () =>{
      setCount(count+1);
  }

  const changeBG = ()=>{
    btnRef.current.style.backgroundColor = "orange"
    btnRef.current.style.color = "white"
  }

  return (
    <>
    {/* <button onClick={increment} ref={btnRef}>Increase</button>
    <br></br>
    <br></br>
    <button onClick={changeBG}>Change upper color</button>
    <br></br>
    <h2>Value:{count}</h2> */}
    <StopWatch/>
    </>
  )
}

export default App

// useRef won't re-render the webpage and persists the given value
// It's mostly used with accessing and manipulation of the DOM Elements!