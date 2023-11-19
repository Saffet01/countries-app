import { useState } from "react";
import "./Inputs.css";
import SearchIcon from "@mui/icons-material/Search";

const Inputs = (props) => {
  const { darkMode, countries, setCountries } = props;
  const [textInputValue, setTextInputValue] = useState("");
  const [selectInputValue, setSelectInputValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const searchValue = textInputValue.trim();
    const selectValue = selectInputValue.trim();

    if (searchValue) {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${searchValue}`
      );
      const data = await response.json();
      setCountries(data);
    } else if (selectValue) {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${selectValue}`
      );
      const datas = await res.json();
      setCountries(datas);
    }
  };

  return (
    <form className="inputs" onSubmit={handleSubmit}>
      <div
        className={`${
          darkMode ? "darkMode searchInputSection" : "searchInputSection"
        }`}
      >
        <SearchIcon />
        <input
          className={`${darkMode ? "darkMode searchInput" : "searchInput"}`}
          type="text"
          placeholder="Search for a country..."
          value={textInputValue}
          onChange={(event) => setTextInputValue(event.target.value)}
        />
      </div>

      <div
        className={`${
          darkMode ? "darkMode selectInputSection" : "selectInputSection"
        }`}
      >
        <select
          className={`${darkMode ? "darkMode selectInput" : "selectInput"}`}
          name=""
          id=""
          value={selectInputValue}
          onChange={(event) => {setSelectInputValue(event.target.value)}}
          //onChange={handleSubmit} it turns unselectable?
        >
          <option value="" disabled selected>
            Filter by Region
          </option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
        </select>
      </div>
    </form>
  );
};

export default Inputs;
