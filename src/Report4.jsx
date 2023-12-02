import React from "react";
import Navbar from "./Navbar";
import "./Report.css";
import "./Report4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Report4() {
  return (
    <div>
      <div className="report-background">
        <div className="strip dark-blue-strip"></div>
        <div>
          <a className="back_arrow" href="/report3">
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        </div>
        <div className="report-title">Thank You</div>
        <div className="strip darker-strip"></div>
        <p className="report-text">
          <br />
          <br />
          <br />
          <br />
          Report Submitted! Thank you for sharing. Whether you chose to remain
          anonymous or provided contact details, your input is invaluable for
          our ongoing efforts. We appreciate your contribution to creating a
          safer environment.
        </p>
        <Navbar />

        <a className="report-button report-button2" href="/home">
          Home
        </a>
      </div>
    </div>
  );
}

export default Report4;
