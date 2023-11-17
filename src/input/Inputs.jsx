import React from "react";
import "./Inputs.css";
import SearchIcon from "@mui/icons-material/Search";


const Inputs = (props) => {

  const {darkMode, searchCountryRef, selectRegionRef, countries, setCountries} = props;

  const searchCountries = ( ) => {
    const searchValue = searchCountryRef.current.value;

    if(searchValue.trim()){
      const fetchSearch = async () => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
        const data = await response.json();
      }
    }
  }

  return (
    <div className="inputs">
      <div className={`${darkMode ? 'darkMode searchInputSection' : 'searchInputSection'}`}>
        <SearchIcon />
        <input
          className="searchInput input"
          type="text"
          placeholder="Search for a country..."
          ref={searchCountryRef}
          onChange={searchCountries}
        />
      </div>

      <div className={`${darkMode ? 'darkMode selectInputSection' : 'selectInputSection'}`}>
        <select className={`${darkMode ? 'darkMode selectInput' : 'selectInput'}`} name="" id="" ref={selectRegionRef}>
          <option value="" disabled selected>
            Filter by Region
          </option>
          <option className={`${darkMode ? 'darkMode option' : 'option'}`}>All</option>
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
