import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <a className="icon home-icon" href="/">
        <FontAwesomeIcon icon={faHouse} />
      </a>
      <a className="icon search-icon" href="/search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </a>
    </>
  );
}

export default Navbar;
