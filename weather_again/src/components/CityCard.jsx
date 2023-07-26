export default function CityCard({ data }) {
    // 0 C = 273.15 K
    const kelvinToCelsius = (k) => {
      return (k - 273.15).toFixed(1);
    };
  
    return (
        <div className="card" style={{width: "18rem", marginTop: "15px"}}>
            <img className="card-img-top" src={`http://openweathermap.org/img/w/${data.icon_code}.png`} alt="weather icon" />
            <div className="card-body">
            <h5 className="card-title">{data.cityName} - {kelvinToCelsius(data.temp)} °C</h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Feels like: {kelvinToCelsius(data.feels_like)} °C</li>
                <li className="list-group-item">Temp max: {kelvinToCelsius(data.temp_max)} °C</li>
                <li className="list-group-item">Temp min: {kelvinToCelsius(data.temp_min)} °C</li>
            </ul>
            </div>
        </div>
    );
  }
  