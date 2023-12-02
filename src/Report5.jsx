import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Report.css";
import "./Report5.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Report5() {
  const [isChecked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [staffNumber, setStaffNumber] = useState("");

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleContinue = () => {
    // Check if all fields are filled
    if (name && email && phoneNumber && staffNumber && isChecked) {
      // All fields are filled, continue to the next page
      window.location.href = "/report1";
    } else {
      // Show an alert or handle the case when fields are not filled
      alert("Please fill in all fields and agree to the terms.");
    }
  };

  return (
    <div>
      <div className="report-background">
        <div className="strip dark-blue-strip"></div>
        <div>
          <a className="back_arrow" href="/report">
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        </div>
        <div className="report-title">Report</div>
        <div className="report-name">Name</div>
        <input
          type="text"
          required
          className="report-name-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="report-email">Email</div>
        <input
          type="text"
          required
          className="report-email-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="report-phone">Phone Number</div>
        <input
          type="text"
          required
          className="report-phone-field"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <div className="report-staff">Staff Number</div>
        <input
          type="text"
          required
          className="report-staff-field"
          value={staffNumber}
          onChange={(e) => setStaffNumber(e.target.value)}
        />

        <label className="report5-checkbox">
          I have read and agree to the terms of conditions
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </label>

        <div className="TOS">Read Terms and Conditions </div>
        <a className="TOS-arrow" href="/termsandconditions">
          <FontAwesomeIcon icon={faArrowRight} />
        </a>

        <div className="strip darker-strip"></div>
        <Navbar />
        <a
          className={`override-button report-button report-button2 ${
            isChecked && name && email && phoneNumber && staffNumber
              ? ""
              : "disabled"
          }`}
          onClick={handleContinue}
        >
          Continue
        </a>
      </div>
    </div>
  );
}

export default Report5;
