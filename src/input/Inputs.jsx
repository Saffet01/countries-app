import React from "react";
import "./Inputs.css";
import SearchIcon from "@mui/icons-material/Search";


//{`${darkMode ? 'darkMode country' : 'country'}`}searchInputSection
const Inputs = (props) => {

  const {darkMode} = props;

  return (
    <div className="inputs">
      <div className={`${darkMode ? 'darkMode searchInputSection' : 'searchInputSection'}`}>
        <SearchIcon />
        <input
          className="searchInput input"
          type="text"
          placeholder="Search for a country..."
        />
      </div>

      <div className={`${darkMode ? 'darkMode selectInputSection' : 'selectInputSection'}`}>
        <select className="selectInput input" name="" id="">
          <option value="" disabled selected>
            Filter by Region
          </option>
          <option value="">All</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Ocenia</option>
        </select>
      </div>
    </div>
  );
};

export default Inputs;
