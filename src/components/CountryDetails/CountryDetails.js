import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetails.css';
const CountryDetails = () => {
    const { countryname } = useParams();
    const [countries, setCountries] = useState([]);
    // const { name, area, alpha2Code, population, region, flag } = country;
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryname}`)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            {
                countries.map(country => <div className="country-div">
                    <div className="country-information">
                        <h5>Name: {country.name}</h5>
                        <p>Area: {country.area}</p>
                        <p>Population: {country.population}</p>
                        <p>Region: {country.region}</p>
                    </div>
                    <div className="image-container">
                        <img src={country.flag} alt="APIImage" />
                    </div>
                </div>)
            }
        </div>
    );
};

export default CountryDetails;