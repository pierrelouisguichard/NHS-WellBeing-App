import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <a className="icon home-icon" href="/home">
        <FontAwesomeIcon icon={faHouse} />
      </a>
      <a className="icon search-icon" href="/search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </a>
      <a className="icon user-icon" href="/login">
        <FontAwesomeIcon icon={faUser} />
      </a>
    </>
  );
}

export default Navbar;
