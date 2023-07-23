import { useEffect, useState } from "react";
import getWeatherData from "./services/WethearApi";
import WethearForm from "./components/WeatherForm";
import WeatherBlock from "./components/Weatherblock";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const handleFetchingWeather = (e) => {
    e.preventDefault();

    getWeatherData(city).then((data) => {
      setWeatherData(data);
    }).catch(error => {
      console.error('fetching error', error);
    });
  };

  return (
    <div>
      <WethearForm city={city} setCity={setCity} handleFetching={handleFetchingWeather} />
      {weatherData && <WeatherBlock data={weatherData} />}
    </div>
  );
}

export default App;
