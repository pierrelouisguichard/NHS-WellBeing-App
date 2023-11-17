import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home-page">
      <div className="pic-of-the-day"></div>
      <div className="wellbeing-button"></div>
      <div className="events-button"></div>
      <div className="home-icon">
        <FontAwesomeIcon icon={faHouse} />
      </div>
      <div className="search-icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div className="profile-icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
}

export default Home;
