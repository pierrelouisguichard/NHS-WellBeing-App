import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import image1 from "./assets/LOGO copy.png";

function Navbar() {
  return (
    <>
      <img src={image1} className="nav-logo" />
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
