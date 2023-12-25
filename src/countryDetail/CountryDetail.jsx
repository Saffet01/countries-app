import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CountryDetail.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const CountryDetail = ({ countries }) => {
  const navigate = useNavigate();
  const { cca3 } = useParams();
  const selectedCountry = countries.find((country) => country.cca3 === cca3);

  if (!selectedCountry) {
    return <p>Country not found</p>;
  }

  const languageCodes = Object.keys(selectedCountry.languages);
  console.log(languageCodes);

  const nativeLanguageCode = languageCodes[0];
  console.log(nativeLanguageCode);

  const nativeLanguageName =
    selectedCountry.name.nativeName[nativeLanguageCode].common;
  console.log(nativeLanguageName);

  const handleBorderCountryClick = (borderCca3) => {
    navigate(`/country/${borderCca3}`);
  };

  return (
    <div className="countryDetail">
      <button className="backBtn" onClick={() => navigate("/")}>
        <ArrowBackIcon />
        Back
      </button>

      <div className="content">
        <div className="contentFlag">
          <img src={selectedCountry.flags.png} alt="" />
        </div>

        <div className="contentText">
          <div className="firstColumn">
            <h2>{selectedCountry.name.common}</h2>

            <ol>
              <li>
                <span>Native Name: </span>
                {nativeLanguageName}
              </li>
              <li>
                <span>Population: </span>
                {selectedCountry.population}
              </li>
              <li>
                <span>Region: </span>
                {selectedCountry.region}
              </li>
              <li>
                <span>Sub Region: </span>
                {selectedCountry.subregion}
              </li>
              <li>
                <span>Capital: </span>
                {selectedCountry.capital}
              </li>
              <li>
                <span>Top Level Domain: </span>
                {selectedCountry.tld}
              </li>
              <li>
                <span>Currencies: </span>
                {Object.values(selectedCountry.currencies)
                  .map((currency) => currency.name)
                  .join(", ")}
              </li>
              <li>
                <span>Languages: </span>
                {Object.values(selectedCountry.languages)
                  .map((language) => language)
                  .join(", ")}
              </li>
            </ol>
          </div>

          <div className="borderCountries">
            <p className="borderCountriesContent">
              Border Countries:{" "}
              {selectedCountry.borders.map((borderCca3) => {
                const borderCountry = countries.find(
                  (country) => country.cca3 === borderCca3
                );
                console.log(borderCountry);
                return (
                  <button
                    className="borderCountryBtn"
                    key={borderCca3}
                    onClick={() => handleBorderCountryClick(borderCca3)}
                  >
                    {borderCountry
                      ? borderCountry.name.common
                      : "Unknown Country"}
                  </button>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
