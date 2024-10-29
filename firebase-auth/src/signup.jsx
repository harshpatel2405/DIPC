// src/Signup.jsx
import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "./firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import './Signup.css'; // Import the CSS file for styling

const Signup = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful");
      navigate("/"); // Redirect to home after signup
    } catch (error) {
      console.error("Error signing up:", error);
      alert(error.message);
    }
  };

  return (
    <div className="signup-wrapper">
      <h2 className="signup-title">Signup</h2>
      <input
        type="email"
        className="signup-input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="signup-input"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type="password"
        className="signup-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="signup-action-button" onClick={handleSignup}>
        Sign Up
      </button>

      <p className="existing-account-prompt">
        Already have an account?{" "}
        <button className="login-toggle-button" onClick={() => navigate("/login")}>
          Click to Login
        </button>
      </p>
    </div>
  );
};

export default Signup;
