import React, { useState } from "react";
import './Dashboard.css';
import axios from 'axios';
// import daycloud from './assets/01d.png';
// import nightcloud from './assets/01n.png';

function Dashboard() {
    const [data, setData] = useState({});
    const [area, setArea] = useState('');
    const options = {
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        headers: {
          'X-RapidAPI-Key': 'IuFUXczxzKmshO3w6rYk5gZbxd9fp1wu7E4jsnZLHFbex5PpNU',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
      };

    const weatherAPIUrl = `http://api.openweathermap.org/data/2.5/weather?q=${area}&units=imperial&appid=d4bb545e86807a107010c5538560e391`;

    
    const searchArea = (event) => {
        if (event.key === 'Enter') {
            axios.get(weatherAPIUrl)
                .then((response) => {
                    // alert(response);
                    // alert(response.data);
                    console.log(response.data);
                    setData(response.data);
                })
            //setArea('');
            // 
        }


    
    }



    return (<><h1>Weather Dashboard</h1>
        <br />
        <br />
        <div className="searchCity">
            <input className="searchCityText"
                type="text"
                onChange={event => setArea(event.target.value)}
                onKeyDown={searchArea}
                placeholder="Enter the required location" />
        </div>
        <br />

        <div className="container">
            <div className="top-area">
                {/* Current Location: {area} <br/> */}
                Searched Location: {data.name}

{/* "temp": 83.44, "feels_like": 86.14,"temp_min": 83.44,"temp_max": 83.44, "pressure": 1009,"humidity": 58, */}
               
            </div>
        </div>
        <div className="weatherSummary">
            <div className="temperatureValue">

       <img src="assets/01d.png"/>        
       <img src={data.main ? `assets/${data.weather.icon}.png` : null}/>

        {/* {data.main ?  <img src={daycloud} height="60px" width="60px"></img>: "" }<br/> */}
         <b>Temperature:</b> {data.main ? data.main.temp.toFixed(1) : null} <br/>
         <b>Feels Like:</b> {data.main ? data.main.feels_like.toFixed(1) : null} <br/>
         <b>Min. Temperature:</b> {data.main ? data.main.temp_min.toFixed(1) : null} <br/>
         <b>Max. Temperature:</b> {data.main ? data.main.temp_max.toFixed(1) : null} <br/>
         <b>Pressure:</b> {data.main ? data.main.pressure : null} <br/>
         <b>Humidity:</b> {data.main ? data.main.humidity : null} <br/>
         
            </div>

            <div className="weatherDescription">
            {data.weather ? data.weather[0].description : null}
            </div>


        </div>
    </>)
}

export default Dashboard;