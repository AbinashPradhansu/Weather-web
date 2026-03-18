 import "./Weather.css";
 import SearchBox from "./SearchBox";
 import InfoBox from "./InfoBox";
import { useState } from "react";
 export default function Weather(){
    let [weather , setWeather] = useState({
         city: "Angul",
        feelsLike : 25.76,
        humidity : 46,
        temp : 25.91,
        tempMax : 25.91,
        tempMin : 25.91,
        weather : "overcast clouds",
    });
    let updateWeather =(newinfo) =>{
        setWeather(newinfo);
    }
    return(
        <div className="Weather">
            <h1>Weather app by Abinash</h1>
            <SearchBox updateWeather={updateWeather}/>
            <InfoBox info={weather}/> 
        </div>
    )
}