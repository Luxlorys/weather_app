import "bootstrap/dist/css/bootstrap.css";
import CityCard from "./CityCard";

export default function WeatherBlock({ data }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {data.map((city) => (
        <div key={city.id} className="col">
          <CityCard data={city}/> 
        </div>
      ))}
    </div>
  );
}