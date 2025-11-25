import React, { useEffect, useState } from 'react';
import DataFetcher from './components/DataFetcher.jsx';
import "./App.css";
import WindowSize from './components/WindowSize.jsx';

export const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // alert(`I will run on each render successfully`);
    }, []);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            {/* <button onClick={handleClick}>Click me</button>
            <br />
            Count is: {count}
            <DataFetcher /> */}
            <WindowSize/>
        </>
    );
};

export default App;
