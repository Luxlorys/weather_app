import "bootstrap/dist/css/bootstrap.min.css";


export default function WeatherBlock({ data }) {

    // const iconUrl = `${IBASE_URL}${data.weather[0].icon}${IEXTENSION}`;
    const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    return (
        <div className="card" style={{width:"16rem"}}>
            <img className="card-img-top" src={iconUrl} alt="weather icon" style={{filter: "none"}}/>
            <div className="card-body">
                <h5 className="card-title">{(data.main.temp - 274).toFixed(1)} °C</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Feels like: {data.main.feels_like}</li>
                    <li class="list-group-item">Temp max: {data.main.temp_max}</li>
                    <li class="list-group-item">Temp min: {data.main.temp_min}</li>
                </ul>
            </div>
        </div>
    );
}