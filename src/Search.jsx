import React from "react";
import SearchBar from "./SearchBar";
import "./Search.css";
import Navbar from "./Navbar";

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
      <Navbar />
    </div>
  );
}

export default Search;
