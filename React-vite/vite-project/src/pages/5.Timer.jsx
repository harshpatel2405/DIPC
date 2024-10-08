import React, { useState, useEffect } from 'react';
import '../../css_files/timer.css';
const Timer = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    // Cleanup function
    return () => {
      clearInterval(timer);
      console.log("Count : "+count);
    };
  }, [isActive,count]);  // Run effect whenever isActive changes

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setCount(0);
    setIsActive(false);
  };


  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Count: {count}</h1>
      <button onClick={handleStartPause}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
