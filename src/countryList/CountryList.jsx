import {Link} from 'react-router-dom';
import Country from "../country/Country";

export const CountryList = ({darkMode, countries, }) => {
  const noCountriesFound = countries.message;
 return (  <div className="countries">
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
)

};