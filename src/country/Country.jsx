import React from 'react'
import "./Country.css"

const Country = (props) => {

    const {darkMode} = props;

  return (
    <div className={`${darkMode ? 'darkMode country' : 'country'}`}>
        <div className="flag">
            <img className='flagImg' src="https://flagcdn.com/tr.svg" alt="" />
        </div>

        <div className={`${darkMode ? 'darkMode details' : 'details'}`}>
            <h3 className='countryname'>Country Name</h3>
            <p>Population: <span className='value'>test</span></p>
            <p>Region: <span className='value'>test</span></p>
            <p>Capital: <span className='value'>test</span></p>
        </div>
    </div>
  )
}

export default Country