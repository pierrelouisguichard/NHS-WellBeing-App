import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function Error() {
  return (
    <div className="text">
      <div>
        <FontAwesomeIcon icon={faGear} spinPulse />
      </div>
      <p>This page doesn't exist.</p>
    </div>
  );
}

// const container = {
//   backgroundColor: "#E6E6E6",
//   height: "100vh",
//   width: "100vw",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const iconWrapper = {
//   marginBottom: "2rem",
// };

// const icon = {
//   color: "#035F48",
//   fontSize: "8rem",
// };

// const text = {
//   color: "#035F48",
//   fontSize: "2.5rem",
// };

export default Error;
