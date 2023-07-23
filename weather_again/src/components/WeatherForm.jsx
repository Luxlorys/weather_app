import Button from "./Button";
import './form.css'

export default function WethearForm({ city, setCity, handleFetching }) {
    const handleChange = (e) => {
        setCity(e.target.value)
    }
    return (
        <form onSubmit={handleFetching} className="form">
            <input 
                type="text" 
                placeholder="enter your city here"
                value={city}
                onChange={handleChange}
                className="weather-field"/>
            <Button />
        </form>
    );
}