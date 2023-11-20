import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faHouse } from "@fortawesome/free-solid-svg-icons";
import "./Error.css";

function Error() {
  return (
    <div className="error-text-container">
      <div className="error-icon">
        <FontAwesomeIcon icon={faGear} spinPulse />
      </div>
      <p className="error-text">This page doesn't exist.</p>
      <a className="home-icon" href="/home">
        <FontAwesomeIcon icon={faHouse} />
      </a>
    </div>
  );
}

export default Error;
