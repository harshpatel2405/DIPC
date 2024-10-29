// src/Auth.jsx
import React, { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmResult, setConfirmResult] = useState(null);

  // Email/password signup
  const handleEmailSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful");
    } catch (error) {
      console.error("Error signing up:", error);
      alert(error.message);
    }
  };

  // Email/password login
  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.message);
    }
  };

  // Phone number signup/login with OTP
  const handlePhoneSignup = async () => {
    const appVerifier = new RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
    }, auth);

    try {
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmResult(result);
      alert("OTP sent!");
    } catch (error) {
      console.error("Error with phone authentication:", error);
      alert(error.message);
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    if (confirmResult) {
      try {
        await confirmResult.confirm(otp);
        alert("Phone authentication successful");
      } catch (error) {
        console.error("Error verifying OTP:", error);
        alert(error.message);
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Email Signup/Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleEmailSignup}>Sign Up with Email</button>
      <button onClick={handleEmailLogin}>Log In with Email</button>

      <h2>Phone Signup/Login</h2>
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div id="recaptcha-container"></div>
      <button onClick={handlePhoneSignup}>Sign Up/Login with Phone</button>

      {confirmResult && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default Auth;
