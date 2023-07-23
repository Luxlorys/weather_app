export default function WeatherBlock({ data }) {
    return (
        <div>
            <h1>Weather data for {data.name}</h1>
        </div>
    );
}