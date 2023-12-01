import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <div className="page">
        <div className="logo"></div>
        <div className="nhs_logo"></div>
        <a className="login" href="/home">
          Continue
        </a>
      </div>
    </div>
  );
}

export default Landing;
