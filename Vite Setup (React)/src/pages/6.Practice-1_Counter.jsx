import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleDecrement = () => {
    if (count === 0) {
      setMessage("Going below zero is not allowed!");
    } else {
      setCount(count - 1);
      setMessage(""); // Clear the message
    }
  };

  return (
    <div style={styles.container}>
      <p>Here, if we try to go below 0, it will display a message</p>
      <h1 style={styles.heading}>{count}</h1>
      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button style={styles.button} onClick={handleDecrement}>
        Decrement
      </button>
      {message && <p style={styles.message}>{message}</p>} {/* Display the message */}
    </div>
  );
}

// Inline CSS styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    color: '#333',
    fontSize: '48px',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  message: {
    color: 'red',
    marginTop: '20px',
    fontSize: '18px',
  },
};

export default Counter;
