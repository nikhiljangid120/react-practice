import React, { useState, useCallback } from 'react';
import './App.css';

// Memoized Button Component
const Button = React.memo(({ handleClick, text }) => {
  console.log(`Rendering: ${text}`);
  return <button onClick={handleClick}>{text}</button>;
});

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Wrap the function inside useCallback to prevent unnecessary re-creations
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div style={{ background: darkMode ? '#222' : '#fff', color: darkMode ? '#fff' : '#000', padding: '20px' }}>
      <h5>Nikhil Jangid</h5>
      <p>Counter: {count}</p>

      {/* Using React.memo helps avoid unnecessary re-renders of Button */}
      <Button handleClick={increment} text="Increment" />

      {/* But React.memo alone won't prevent re-renders when passing functions as props, useCallback is needed */}
      <Button handleClick={() => setDarkMode(!darkMode)} text="Toggle Theme" />
    </div>
  );
}

export default App;
