import { useState, useMemo } from 'react';
import './App.css';

// useMemo -> Caches/memoise a result

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Expensive operation: Simulates a heavy computation
  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  }, []); // Runs only once unless dependencies change

  return (
    <div style={{ background: darkMode ? '#222' : '#fff', color: darkMode ? '#fff' : '#000', padding: '20px' }}>
      <h2>Nikhil Jangid</h2>
      <h3>Expensive Computation: {expensiveCalculation}</h3>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setDarkMode(!darkMode)} style={{ marginLeft: '10px' }}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default App;
