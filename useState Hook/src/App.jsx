import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>You have clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Check</button>
      {/* Basic Counter app */}
    </div>
  );
};

export default App