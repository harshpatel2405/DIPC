// src/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Our App</h1>
      <p className="intro-text">
        Your one-stop solution for managing your tasks efficiently with the help of Firebase. 
        Enjoy seamless signup and login, and get started on your journey to better productivity!
      </p>
      <h2>Features:</h2>
      <ul className="features-list">
        <li>User-friendly interface for easy navigation.</li>
        <li>Secure authentication via Firebase.</li>
        <li>Real-time data updates and management.</li>
        <li>Responsive design for mobile and desktop.</li>
      </ul>
      <div className="button-container">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
      </div>
    </div>
  );
};

export default Home;
