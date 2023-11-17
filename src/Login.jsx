import React from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <div className="login_page">
      <div className="title">Login</div>
      <div className="email">Email</div>
      <input type="text" required className="email_field"></input>
      <div className="password">Password</div>
      <input type="password" required className="password_field"></input>
      <a className="login_button" href="/home">
        Login
      </a>
      <a className="back_button" href="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </a>
    </div>
  );
}

export default Login;
