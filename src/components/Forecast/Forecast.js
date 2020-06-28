import React, { useState } from 'react';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    function getForecast() {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "76b39e4867msh9c1a9f3b7db75eap1ab006jsn1d26bae1cbfd"
	}
})
.then (response => response.json())
.then(response => {setResponseObj(response)
});
     }
     return (
        <div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(responseObj)}
           </div>
           <button onClick={getForecast}>Get Forecast</button>
       </div>
     )
  }
  export default Forecast;