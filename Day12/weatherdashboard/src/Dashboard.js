import React, {useState} from "react";
import './Dashboard.css';
import axios from 'axios';

function Dashboard(){
const [data, setData] = useState({});
const [area, setArea] = useState('Coimbatore');

const weatherAPIUrl = `http://api.openweathermap.org/data/2.5/weather?q=${area}&units=imperial&appid=ca5cf24fd5169632e6b1e43cea82cdac`;

const searchArea = (event) =>{
if (event.key === 'Enter'){
    axios.get(weatherAPIUrl)
    .then((response)=>{
        alert(response.data);
        setData(response.data);
        
    })
    setArea('');
   // 
}
}


return (<>Weather Dashboard
<br/>
<br/>
<div className="searchCity">
    <input className="searchCityText" 
    type="text" 
    onChange={event => setArea(event.target.value)}
    onKeyDown={searchArea}
    placeholder="Enter the required location"/>
</div>
<br/>
Current Location: {area}
<div className="weatherSummary">
    <div className="temperatureValue">

    </div>

</div>
</>)
}

export default Dashboard;