import React, { useRef, useState } from 'react';

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }
  };

  const stopStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Stopwatch</h1>
      <h2>{time} sec</h2>
      <button onClick={startStopwatch} disabled={isRunning}>Start</button>
      <button onClick={stopStopwatch} disabled={!isRunning}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default StopWatch;
