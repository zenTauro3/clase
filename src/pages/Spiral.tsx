import { useState } from "react";

function Spiral () {
    const [radio , setRadio] = useState("");
    const [tickness, setTickness] = useState("");
    const [turns, setTurns] = useState("");
    const [distance, setDistance] = useState("");

    const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadio(event.target.value)
    }

    const handleTickness = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTickness(event.target.value)
    }

    const handleTurns = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTurns(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const pi = Math.PI;
        const r = Number(radio)
        const n = Number(turns)
        const h = Number(tickness)
        const equation = Math.pow(2*pi*(n*r+h*((n**2)/2)), 2) + (n*h)**2
        const solution = Math.sqrt(equation).toString()
        setDistance(solution)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <span>All measures in mm</span>
                <input type="number" placeholder="Radio" value={radio} onChange={handleRadio}/>
                <input type="number" placeholder="Tickness" value={tickness} onChange={handleTickness}/>
                <input type="number" placeholder="Turns" value={turns} onChange={handleTurns}/>
                <button type="submit">Calculate</button>
            </form>
            <span>{distance} mm</span>
        </div>
    )
};

export default Spiral;