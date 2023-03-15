import React from 'react';
import { useState,useRef } from 'react';
function Timer(props) {

    const [count, setCount] = useState(0);
    const timer = useRef();

    const start = () => {
      timer.current = setInterval(() => {
        setCount((pre) => pre + 1);
      }, 1000);
    };
    const stop = () => {
      clearInterval(timer.current);
    };
    const reset = () => {
      stop();
      setCount(0);
    };
  
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
}

export default Timer;