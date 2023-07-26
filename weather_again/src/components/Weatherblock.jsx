import "bootstrap/dist/css/bootstrap.min.css";
import CityCard from "./CityCard";

export default function WeatherBlock({ data }) {
  return (
    <div className="row">
      {data.map((city) => (
        <CityCard key={city.id} data={city} />
      ))}
    </div>
  );
}