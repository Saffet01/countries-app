import "./App.css";
import Header from "./header/Header";
import Inputs from "./input/Inputs";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { CountryDetail } from "./countryDetail/CountryDetail";
import { Home } from "@mui/icons-material";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const searchCountryRef = useRef();
  const selectRegionRef = useRef();

  const onClick = () => {
    setDarkMode((state) => !state);
  };

  return (
    <Router>
      <div className={`${darkMode ? "darkMode App" : "App"}`}>
        <Header onClick={onClick} darkMode={darkMode} />
        <Inputs
          darkMode={darkMode}
          searchCountryRef={searchCountryRef}
          selectRegionRef={selectRegionRef}
          countries={countries}
          setCountries={setCountries}
        />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/country/:cca3" element={<CountryDetail countries={countries} />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
