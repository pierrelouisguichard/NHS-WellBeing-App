import React from "react";
import Navbar from "./Navbar";
import "./Report.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Report() {
  return (
    <div className="report-background">
      <div className="strip dark-blue-strip"></div>
      <div>
        <a className="back_arrow" href="/home">
          <FontAwesomeIcon icon={faArrowLeft} />
        </a>
      </div>
      <div className="report-title">Report & Support</div>
      <div className="strip darker-strip"></div>
      <Navbar />
      <p className="report-text">
        {" "}
        The NHS condemns bullying and harassment, prioritising a safe
        environment. <br />
        <br />
        Staff can report incidents anonymously or with their contact details,
        ensuring a confidential platform to address concerns and foster a
        culture of respect.
        <br />
        <br />
        Bullying is when someone repeatedly hurts or scares others on purpose.
        Harassment is unwanted actions or words that create a scary or
        uncomfortable environment, often based on things like race or gender.
        Both are not okay and can make a workplace unfriendly.
      </p>
      <a className="report-button report-button1" href="/report5">
        Report with Contact Details
      </a>
      <a className="report-button report-button2" href="/report1">
        Report Anonymously
      </a>
    </div>
  );
}

export default Report;
