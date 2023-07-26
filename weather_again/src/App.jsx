import { useState } from "react";
import WethearForm from "./components/WeatherForm";
import WeatherBlock from "./components/Weatherblock";
import './index.css'
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("");

  return (
    <div className="container">
      <div className="centered-div">
        <WethearForm city={city} setCity={setCity} weatherData={weatherData} setWeatherData={setWeatherData} />
        {weatherData && <WeatherBlock data={weatherData} />}
      </div>
    </div>
  );
}

export default App;
