import './App.css';
import Header from './header/Header';
import Inputs from './input/Inputs';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { CountryDetail } from './countryDetail/CountryDetail';
import { CountryList } from './countryList/CountryList';

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
		const response = await fetch('https://restcountries.com/v3.1/all');
		const data = await response.json();
		setCountries(data);
	};

	return (
		<Router>
			<div className={`${darkMode ? 'darkMode App' : 'App'}`}>
				<Header onClick={onClick} darkMode={darkMode} />

				<Routes>
					<Route
						path='/country/:cca3'
						element={<CountryDetail countries={countries} />}
					/>
					<Route
						path='/'
						element={
							<>
								<Inputs
									darkMode={darkMode}
									searchCountryRef={searchCountryRef}
									selectRegionRef={selectRegionRef}
									countries={countries}
									setCountries={setCountries}
								/>
								<CountryList darkMode={darkMode} countries={countries} />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
