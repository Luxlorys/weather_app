
// idk, my .env does not work...
const API_KEY = '6f7f209b9973d7cfbdcbf0c6c651eb3f';

export default async function getWeatherData(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    try {
        const response = await fetch(URL);
    
        if (!response.ok) {
          throw new Error("wheather data not allowed for the given city");
        }
    
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
      }
}

