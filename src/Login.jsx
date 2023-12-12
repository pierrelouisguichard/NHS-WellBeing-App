import React, { useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Check if both email and password fields are filled
    if (email && password) {
      // Both fields are filled, you can proceed with login
      window.location.href = "/home";
    } else {
      // Show an alert or handle the case when fields are not filled
      alert("Please fill in both email and password fields.");
    }
  };

  return (
    <div className="login_page">
      <div className="title-login">Login</div>

      <div className="email">Email</div>
      <input
        type="text"
        required
        className="email_field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="password">Password</div>
      <input
        type="password"
        required
        className="password_field"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <a className="login_button" onClick={handleLogin}>
        Login
      </a>

      <a className="back_button" href="/home">
        <FontAwesomeIcon icon={faArrowLeft} />
      </a>
    </div>
  );
}

export default Login;
