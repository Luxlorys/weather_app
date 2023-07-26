export default function CityCard({ data }) {
    // 0 C = 273.15 K
    const kelvinToCelsius = (k) => {
      return (k - 273.15).toFixed(1);
    };
  
    // The icon URL should be directly accessed from the 'data' object as 'data.icon'
    const iconUrl = (code) => {
      return `http://openweathermap.org/img/w/${code}.png`;
    };
  
    return (
      <div className="card">
        <img className="card-img-top" src={iconUrl(data.icon)} alt="weather icon" />
        <div className="card-body">
          <h5 className="card-title">{data.cityName} - {kelvinToCelsius(data.temp)} °C</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Feels like: {kelvinToCelsius(data.feels_like)} °C</li>
            <li className="list-group-item">Temp max: {kelvinToCelsius(data.temp_max)} °C</li>
            <li className="list-group-item">Temp min: {kelvinToCelsius(data.temp_min)} °C</li>
            <li className="list-group-item">icon: {data.icon_code}</li>
          </ul>
        </div>
      </div>
    );
  }
  