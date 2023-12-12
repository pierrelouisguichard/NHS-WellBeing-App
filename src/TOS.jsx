import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Report.css";
import "./Report5.css";
import "./TOS.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function TOS() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleContinue = () => {
    if (isChecked) {
      window.location.href = "/home";
    } else {
      alert("Please agree to the terms.");
    }
  };

  const handleFileChange = (e) => {
    // Placeholder for file change handling
    console.log("File changed:", e.target.files[0]);
  };

  return (
    <div className="home-page">
      <div>
        <a className="back_arrow" href="/home">
          <FontAwesomeIcon icon={faArrowLeft} />
        </a>
      </div>
      <div className="report-title">TOS</div>

      <label className="report5-checkbox position1">
        I have read and agree to the terms of conditions
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>

      <div className="TOS position2">Read Terms and Conditions </div>
      <a className="TOS-arrow position3" href="/termsandconditions">
        <FontAwesomeIcon icon={faArrowRight} />
      </a>

      <Navbar />

      <label className="report-button report-button2">
        Upload File
        <input
          id="fileInput"
          className="file-input"
          type="file"
          onChange={(e) => handleFileChange(e)}
        />
      </label>

      <a
        className={`override-button report-button report-button2 ${
          isChecked ? "" : "disabled"
        }`}
        onClick={handleContinue}
      >
        Continue
      </a>
    </div>
  );
}

export default TOS;
