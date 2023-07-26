import "bootstrap/dist/css/bootstrap.min.css";


export default function WeatherBlock({ data }) {

    // 0 C = 273.15 K
    const kelvinToCelsius = (k) => {
        return (k - 273.15).toFixed(1);
    }

    // const iconUrl = `${IBASE_URL}${data.weather[0].icon}${IEXTENSION}`;
    const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    return (
        <div className="card" style={{width:"16rem"}}>
            <img className="card-img-top" src={iconUrl} alt="weather icon" style={{filter: "none"}}/>
            <div className="card-body">
                <h5 className="card-title">City: {data.name} - {kelvinToCelsius(data.main.temp)}°C</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Feels like: {kelvinToCelsius(data.main.feels_like)}°C</li>
                    <li class="list-group-item">Temp max: {kelvinToCelsius(data.main.temp_max)}°C</li>
                    <li class="list-group-item">Temp min: {kelvinToCelsius(data.main.temp_min)}°C</li>
                    <li class="list-group-item">Description: {data.weather[0].description}</li>
                </ul>
            </div>
        </div>
    );
}