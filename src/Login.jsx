import React from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Login() {
  return (
    <div className="login_page">
      <div className="title">Login</div>
      <div className="email">Email</div>
      <div className="email_field"></div>
      <div className="password">Password</div>
      <div className="password_field"></div>
      <a className="login_button" href="/error">
        Login
      </a>
      <a className="back_button" href="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </a>
    </div>
  );
}

export default Login;
