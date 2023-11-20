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
import image1 from "./assets/events.png";
import image2 from "./assets/wellbeing.png";

function Home() {
  return (
    <div className="home-page">
      <div className="pic-of-the-day">
        <p className="home-text">Picture of the day!</p>
        <div className="upload-button">
          <label htmlFor="fileInput" className="custom-label">
            Upload
          </label>
          <input
            id="fileInput"
            className="file-input"
            type="file"
            onChange={(e) => handleFileChange(e)}
          />
        </div>

        <div className="slider-container">
          <Slider />
        </div>
      </div>
      <a className="wellbeing-button" href="/error">
        <p className="home-text">Well Being</p>
        <img src={image2} className="img" />
      </a>
      <a className="events-button" href="/error">
        <p className="home-text">Events</p>
        <img src={image1} className="img" />
      </a>
      <a className="home-icon" href="/">
        <FontAwesomeIcon icon={faHouse} />
      </a>
      <a className="search-icon" href="/search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </a>
      <a className="profile-icon" href="/error">
        <FontAwesomeIcon icon={faUser} />
      </a>
    </div>
  );
}

export default Home;
