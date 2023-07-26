import getWeatherData from "../services/WethearApi";
import Button from "./Button";
import './form.css'


export default function WethearForm({ city, setCity, weatherData, setWeatherData }) {
    
    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const handleFetchingWeather = (e) => {
        e.preventDefault();
    
        getWeatherData(city)
            .then((data) => {
                const newCityData = {
                    id: weatherData.length + 1, 
                    cityName: data.name,
                    temp: data.main.temp,
                    feels_like: data.main.feels_like,
                    temp_max: data.main.temp_max,
                    temp_min: data.main.temp_min,
                    icon_code: data.weather.icon,
                }
            
            setWeatherData([...weatherData, newCityData])
        }).catch(error => {
          console.error('fetching error', error);
        });
      };

    return (
        <form onSubmit={handleFetchingWeather} className="form">
            <input 
                type="text" 
                placeholder="enter your city here"
                value={city}
                onChange={handleChange}
                className="weather-field"/>
            <Button />
        </form>
    );
}