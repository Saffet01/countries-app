import React from 'react'
import { useParams } from 'react-router-dom'

export const CountryDetail = ({countries}) => {

    const {cca3} = useParams();
    const selectedCountry = countries.find(country => country.cca3 === cca3)

    if(!selectedCountry){
        return <p>Country not found</p>
    }

  return (
    <div>
      <h2>{selectedCountry.name.common}</h2>
      <p>Population: {selectedCountry.population}</p>
      <p>Capital: {selectedCountry.capital}</p>
      <p>Region: {selectedCountry.region}</p>
      
    </div>
  )
}

 