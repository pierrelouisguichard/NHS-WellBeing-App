import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "./Error.css";
import Navbar from "./Navbar";

function Error() {
  return (
    <div className="error-text-container">
      <div className="error-icon">
        <FontAwesomeIcon icon={faGear} spinPulse />
      </div>
      <p className="error-text">This page doesn't exist.</p>
      <Navbar />
    </div>
  );
}

export default Error;
