import "./App.css";
import Header from "./header/Header";
import Inputs from "./input/Inputs";
import Country from "./country/Country";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const onClick = () => {
    setDarkMode(state => !state);
  }
//{`${darkMode ? 'darkMode header' : 'header'}`}

  return (
    <div className={`${darkMode ? 'darkMode App' : 'App'}`}>
      <Header onClick={onClick} darkMode={darkMode} />
      <Inputs darkMode={darkMode} />

      <div className="countries">
        <Country darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
