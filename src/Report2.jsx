import React, { useState } from "react";

import "./Report2.css";
import Navbar from "./Navbar";
import "./Report.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Report2() {
  const [bullyingChecked, setBullyingChecked] = useState(false);
  const [harassmentChecked, setHarassmentChecked] = useState(false);
  const [sexualHarassmentChecked, setSexualHarassmentChecked] = useState(false);
  const [discriminationChecked, setDiscriminationChecked] = useState(false);
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
        <a
          className="override-button report-button report-button2"
          href="/report3"
        >
          Continue
        </a>
      </div>
    </div>
  );
}

export default Report2;
