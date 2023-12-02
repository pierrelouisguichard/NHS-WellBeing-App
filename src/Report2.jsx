import React, { useState } from "react";

import "./Report2.css";
import Navbar from "./Navbar";
import "./Report.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Report2() {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxChange = (checkboxName) => {
    setSelectedCheckbox(checkboxName);
  };

  const isCheckboxSelected = (checkboxName) => {
    return selectedCheckbox === checkboxName;
  };

  return (
    <div>
      <div className="report-background">
        <div className="strip dark-blue-strip"></div>
        <div>
          <a className="back_arrow" href="/report1">
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        </div>
        <div className="report-title">Report</div>
        <div className="strip darker-strip"></div>
        <Navbar />
        {/* Checkbox section */}
        <div className="checkbox-section">
          <label>
            <input
              type="checkbox"
              checked={isCheckboxSelected("bullying")}
              onChange={() => handleCheckboxChange("bullying")}
            />
            <span className="checkbox-text">Bullying</span>
          </label>

          <label>
            <input
              type="checkbox"
              checked={isCheckboxSelected("harassment")}
              onChange={() => handleCheckboxChange("harassment")}
            />
            <span className="checkbox-text">Harassment</span>
          </label>

          <label>
            <input
              type="checkbox"
              checked={isCheckboxSelected("sexualHarassment")}
              onChange={() => handleCheckboxChange("sexualHarassment")}
            />
            <span className="checkbox-text">Sexual Harassment</span>
          </label>

          <label>
            <input
              type="checkbox"
              checked={isCheckboxSelected("discrimination")}
              onChange={() => handleCheckboxChange("discrimination")}
            />
            <span className="checkbox-text">Discrimination</span>
          </label>
        </div>
        <a
          className={`override-button report-button report-button2 ${
            selectedCheckbox ? "" : "disabled"
          }`}
          href={selectedCheckbox ? "/report3" : "#"}
        >
          Continue
        </a>
      </div>
    </div>
  );
}

export default Report2;
