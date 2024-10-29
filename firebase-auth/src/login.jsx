import React, { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber, signInWithEmailAndPassword } from "./firebase";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Import the CSS file

const Login = () => {
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmResult, setConfirmResult] = useState(null);
  const [isPhoneLogin, setIsPhoneLogin] = useState(false);

  const handleLogin = async () => {
    try {
      if (isPhoneLogin) {
        const appVerifier = new RecaptchaVerifier("recaptcha-container", {
          size: "invisible",
          callback: (response) => {
            console.log("ReCAPTCHA solved, allow signInWithPhoneNumber.");
          },
          "expired-callback": () => {
            console.log("ReCAPTCHA expired, please try again.");
          },
        }, auth);
  
        const result = await signInWithPhoneNumber(auth, emailOrPhone, appVerifier);
        setConfirmResult(result);
        alert("OTP sent! Please check your phone.");
      } else {
        await signInWithEmailAndPassword(auth, emailOrPhone, password);
        alert("Login successful!");
        navigate("/"); // Redirect to Home.jsx after successful login
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert(`Login failed: ${error.message}`);
    }
  };

  const verifyOtp = async () => {
    if (confirmResult) {
      try {
        await confirmResult.confirm(otp);
        alert("Phone authentication successful!");
        console.log("User authenticated with phone number.");
        navigate("/home"); // Redirect to Home.jsx after successful OTP verification
      } catch (error) {
        console.error("Error verifying OTP:", error);
        alert(`OTP verification failed: ${error.message}`);
      }
    } else {
      console.warn("No confirmation result available.");
      alert("Please send OTP first.");
    }
  };

  return (
    <div className="login-wrapper">
      <h2 className="login-title">Login</h2>
      <input
        type="text"
        placeholder="Email or Phone Number"
        value={emailOrPhone}
        onChange={(e) => setEmailOrPhone(e.target.value)}
        className="login-input"
      />
      {!isPhoneLogin && (
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
      )}
      <button onClick={handleLogin} className="login-button">
        {isPhoneLogin ? "Send OTP" : "Log In"}
      </button>

      <button onClick={() => setIsPhoneLogin(!isPhoneLogin)} className="toggle-login-method">
        {isPhoneLogin ? "Use Email/Password" : "Use Phone Number"}
      </button>

      {confirmResult && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="login-input"
          />
          <button onClick={verifyOtp} className="otp-verify-button">Verify OTP</button>
        </>
      )}

      <div id="recaptcha-container" className="recaptcha-container"></div>
      <p className="signup-prompt">
        Don't have an account?{" "}
        <button onClick={() => navigate("/signup")} className="signup-button">Click to Signup</button>
      </p>
    </div>
  );
};

export default Login;
