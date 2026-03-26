 import './SearchBox.css'
 import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
 

export default function SearchBox({updateWeather}){
    let [city, setCity] = useState("");
    
    let [error,setError] = useState(false);
       let API_URL=import.meta.env.VITE_API_URL;
       let API_KEY=import.meta.env.VITE_API_KEY;
       
    function handleChange(event){
        setCity(event.target.value);
    }
    async function  handleSubmit(e){
        try{
             e.preventDefault();
             setError(false);

            console.log(city);
          
            let newinfo= await getWeatherInfo();
            updateWeather(newinfo);
              setCity("");
        } catch(e){
             
              setError(true);
        }
       
    }

    let getWeatherInfo = async() =>{
         console.log(API_KEY);
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
         if (jsonResponse.cod !== 200) {
        throw new Error("City not found");
    }
        let result ={
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        } catch(error){
             throw error;
        }
        
    }
    return(
        <div className='search'>
        <h3>  Search weather</h3>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City name" variant="outlined" value={city} onChange={handleChange} required/> 
            <br />
            <br />
         <Button type='submit' variant="contained" >  Search </Button>
         {error && <p style={{color: "red"}}> no such place in out api !</p>}
        </form>
        </div>
    )
}