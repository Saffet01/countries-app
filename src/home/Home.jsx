import React from "react";
import Country from "./country/Country";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const noCountriesFound = countries.message;

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


  return (
    <div className="countries">
      {!noCountriesFound ? (
        countries.map((country) => {
          return (
            <Link to={`/country/${country.cca3}`} key={country.cca3}>
              <Country
                key={country.cca3}
                darkMode={darkMode}
                flag={country.flags.png}
                countryName={country.name.common}
                population={country.population}
                capitalCity={country.capital}
                region={country.region}
              />
            </Link>
          );
        })
      ) : (
        <p
          className={`${
            darkMode ? "darkMode noCountryFoundText" : "noCountryFoundText"
          }`}
        >
          No country found
        </p>
      )}
    </div>
  );
};
