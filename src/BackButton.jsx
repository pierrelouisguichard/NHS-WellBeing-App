import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./BackButton.css";

function BackButton() {
  return (
    <div>
      <a className="back_arrow" href="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </a>
    </div>
  );
}

export default BackButton;
