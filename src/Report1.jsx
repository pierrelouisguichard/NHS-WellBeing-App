import React from "react";
import Navbar from "./Navbar";
import "./Report.css";
import "./Report1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Report1() {
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
        <div className="strip darker-strip"></div>
        <p className="report-text">
          We understand this might be tough for you, and we're here to help.If
          you choose to report anonymously, it won't directly assist you but can
          benefit others. The details you share will enhance overall support and
          inform prevention efforts across the Hospital.
          <br />
          <br /> However, anonymous reporting won't lead to formal actions. For
          direct support, guidance, or a formal investigation, please use the
          form with contact details. Your data is crucial, and we follow a
          strict privacy policy. In certain cases, the NHS may act even without
          a request, guided by duty of care.
          <br />
          <br /> The report takes 5-10 minutes, and you can skip optional
          questions. Details remain confidential, shared only with essential
          staff.
        </p>
        <Navbar />
        <a
          className="override-button report-button report-button2"
          href="/report2"
        >
          Continue
        </a>
      </div>
    </div>
  );
}

export default Report1;
