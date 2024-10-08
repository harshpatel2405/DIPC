import React, { useState, useEffect } from 'react';

function HelloComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // First useEffect: Runs once when the component mounts
  useEffect(() => {
    console.log('Component mounted!');
    // Cleanup function (optional, if needed)
    return () => {
      console.log('Component unmounted!');
    };
  }, []); // Empty dependency array means it runs only once

  // Second useEffect: Runs whenever the "count" state changes
  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]); // Runs whenever "count" changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..." 
      />
      <p>Text: {text}</p>
    </div>
  );
}

export default HelloComponent;
