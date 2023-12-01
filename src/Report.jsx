import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Report.css";
import BackButton from "./BackButton";

function Report() {
  const handleReport = (anonymously) => {
    console.log(anonymously ? "Reporting Anonymously" : "Entering Name");
  };
  const [bullyingChecked, setBullyingChecked] = useState(false);
  const [harassmentChecked, setHarassmentChecked] = useState(false);
  const [sexualHarassmentChecked, setSexualHarassmentChecked] = useState(false);
  const [discriminationChecked, setDiscriminationChecked] = useState(false);

  return (
    <div className="report-background">
      <div className="dark-blue-strip"></div>
      <div className="report-title">Report</div>
      <div className="darker-strip"></div>
      <BackButton />
      <Navbar />

      {/* Checkbox section */}
      <div className="checkbox-section">
        <label>
          <input
            type="checkbox"
            checked={bullyingChecked}
            onChange={() => setBullyingChecked(!bullyingChecked)}
          />
          <span className="checkbox-text">Bullying</span>
        </label>

        <label>
          <input
            type="checkbox"
            checked={harassmentChecked}
            onChange={() => setHarassmentChecked(!harassmentChecked)}
          />
          <span className="checkbox-text">Harassment</span>
        </label>

        <label>
          <input
            type="checkbox"
            checked={sexualHarassmentChecked}
            onChange={() =>
              setSexualHarassmentChecked(!sexualHarassmentChecked)
            }
          />
          <span className="checkbox-text">Sexual Harassment</span>
        </label>

        <label>
          <input
            type="checkbox"
            checked={discriminationChecked}
            onChange={() => setDiscriminationChecked(!discriminationChecked)}
          />
          <span className="checkbox-text">Discrimination</span>
        </label>
      </div>
      <div className="button-section">
        <button className="report-button" onClick={() => handleReport(true)}>
          Report Anonymously
        </button>
        <button className="report-button" onClick={() => handleReport(false)}>
          Enter Name
        </button>
      </div>
    </div>
  );
}

export default Report;
