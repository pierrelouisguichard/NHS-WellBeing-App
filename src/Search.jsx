import React from "react";
import SearchBar from "./SearchBar";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  "Yoga",
  "Stress at Work",
  "Mental Health",
  "Bereavement and Loss",
  "Healthy eating",
  "Physical health",
];

function Search() {
  return (
    <div className="search-container">
      <div className="search-bar-position">
        <SearchBar data={data} />
      </div>
      <a className="home-icon" href="/home">
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

export default Search;
