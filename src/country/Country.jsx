import React from 'react'
import "./Country.css"

const Country = (props) => {

    const {darkMode, flag, countryName, population, capitalCity, region } = props;

  return (
    <div className={`${darkMode ? 'darkMode country' : 'country'}`}>
        <div className="flag">
            <img className='flagImg' src={flag} alt="" />
        </div>

        <div className={`${darkMode ? 'darkMode details' : 'details'}`}>
            <h3 className='countryname'>{countryName}</h3>
            <p>Population: <span className='value'>{population}</span></p>
            <p>Region: <span className='value'>{region}</span></p>
            <p>Capital: <span className='value'>{capitalCity}</span></p>
        </div>
    </div>
  )
}

export default Country