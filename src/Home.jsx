// Home.js

import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="page">
        <div className="logo"></div>
        <div className="nhs_logo"></div>
        <a className="login" href="/login">
          Login
        </a>
        <a className="create_account" href="/error">
          Create Account
        </a>
      </div>
    </div>
  );
}

export default Home;
