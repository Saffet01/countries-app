import { useState} from 'react';
import "./Inputs.css";
import SearchIcon from "@mui/icons-material/Search";


const Inputs = (props) => {

  const {darkMode, searchCountryRef, selectRegionRef, countries, setCountries} = props;
  const [textInputValue, setTextInputValue] = useState('');
  const [selectInputValue, setSelectInputValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // add selectInputValue as needed
    const searchValue = textInputValue.trim();
    if(searchValue){
      const response = await fetch(`https://restcountries.com/v3.1/name/${searchValue}`);
      const data = await response.json();
      setCountries(data);
    }
  }

  return (
    <form className="inputs" onSubmit={handleSubmit}>
      <div className={`${darkMode ? 'darkMode searchInputSection' : 'searchInputSection'}`}>
        <SearchIcon />
        <input
          className="searchInput input"
          type="text"
          placeholder="Search for a country..."
          // ref={searchCountryRef}
          value={textInputValue}
          onChange={(event) => setTextInputValue(event.target.value)}
        />
      </div>

      <div className={`${darkMode ? 'darkMode selectInputSection' : 'selectInputSection'}`}>
        <select
          className={`${darkMode ? 'darkMode selectInput' : 'selectInput'}`}
          name=""
          id=""
          value={selectInputValue}
          onChange={(event) => setSelectInputValue(event.target.value)}
          // ref={selectRegionRef}
        >
          <option value="" disabled>
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
    </form>
  );
};

export default Inputs;