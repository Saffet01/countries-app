import "./App.css";
import Header from "./header/Header";
import Inputs from "./input/Inputs";
import Country from "./country/Country";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const searchCountryRef = useRef();
  const selectRegionRef = useRef();

  const onClick = () => {
    setDarkMode((state) => !state);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  };

  console.log("countries: ", countries);

  return (
    <div className={`${darkMode ? "darkMode App" : "App"}`}>
      <Header onClick={onClick} darkMode={darkMode} />
      <Inputs darkMode={darkMode} searchCountryRef={searchCountryRef} selectRegionRef={selectRegionRef} countries={countries} setCountries={setCountries} />

      <div className="countries">
        {
          /* <Country darkMode={darkMode} /> */
          countries.map((country) => {
            return (
              <Country
                key={country.cca3}
                darkMode={darkMode}
                flag={country.flags.png}
                countryName={country.name.official}
                population={country.population}
                capitalCity={country.capital}
                region={country.region}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
