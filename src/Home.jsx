import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Slider";

function Home() {
  return (
    <div className="home-page">
      <div className="pic-of-the-day">
        <p className="home-text">Picture of the day!</p>
        <div className="slider-container">
          <Slider />
        </div>
      </div>
      <a className="wellbeing-button" href="/error">
        <p className="home-text">Well Being</p>
      </a>
      <a className="events-button" href="/error">
        <p className="home-text">Events</p>
      </a>
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
