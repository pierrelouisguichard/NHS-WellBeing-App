import React from "react";
import Navbar from "./Navbar";
import "./Report.css";
import "./Report3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Report3() {
  return (
    <div>
      <div className="report-background">
        <div className="strip dark-blue-strip"></div>
        <div>
          <a className="back_arrow" href="/report2">
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        </div>
        <div className="report-title">Report</div>
        <div className="strip darker-strip"></div>
        <p className="report-text">
          We understand it's tough. More details help us assist you and others
          better. Include when, where, and what happened. Mentioning names won't
          result in direct action but aids prevention. You choose if you want to
          include identifiable info—it's optional.
          <br />
          <br /> Refer to our duty of care guidance for details. Your comfort
          and privacy matter.
        </p>
        <Navbar />
        <div className="report3-container">
          <div className="report3-label">
            Please provide information on the report you would like to make:
            (Optional)
          </div>
          <div className="report3-textbox">
            <input type="text" className="report3-input-box" />
          </div>
        </div>
        <a
          className="override-button report-button report-button2"
          href="/report4"
        >
          Continue
        </a>
      </div>
    </div>
  );
}

export default Report3;
