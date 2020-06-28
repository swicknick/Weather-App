import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    const uriEncodedCity = encodeURIComponent(city);
    function getForecast() {
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "76b39e4867msh9c1a9f3b7db75eap1ab006jsn1d26bae1cbfd"
            }
        })
            .then(response => response.json())
            .then(response => {
                setResponseObj(response)
            });
    }
    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form onSubmint={getForecast}>
                <input 
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) =>
                    setCity(e.target.value)}
                    />
                <label>
                    <input 
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) =>
                        setUnit(e.target.value)}
                    />
                    Fahrenheit
                </label>
                <label>
                    <input 
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) =>
                        setUnit(e.target.value)}
                    />
                    Celcius
                </label>
                    
                    <button type="submit">Get Forecast</button>
            </form>
            <Conditions
                responseObj={responseObj}
            />
        </div>
    )
}
export default Forecast;