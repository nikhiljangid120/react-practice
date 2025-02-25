
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,reset } from './features/counter/counterSlice'

function App() {

  // Introducing useSelector & useDispatch hook ->
  const counter = useSelector((state)=>state.counter.value) 

  const dispatch = useDispatch()

  function incrementChange(){
      dispatch(increment())
  }

  function decrementChange(){
      dispatch(decrement())
  }

  function resetPhase(){
      dispatch(reset())
  }

  return (
    <>
     <div className='container'>
        <button onClick={incrementChange}>
          +
        </button>
        <br></br>
        <h2>Count: {counter}</h2>
        <button onClick={decrementChange}>
          -
        </button>
        <br></br>
        <br></br>
        <button onClick={resetPhase}>Reset</button>
     </div>
    </>
  )
}

export default App
