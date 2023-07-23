import Button from "./Button";

export default function WethearForm({ city, setCity, handleFetching }) {
    const handleChange = (e) => {
        setCity(e.target.value)
    }
    return (
        <form onSubmit={handleFetching}>
            <input 
                type="text" 
                placeholder="enter your city here"
                value={city}
                onChange={handleChange}/>
            <Button />
        </form>
    );
}