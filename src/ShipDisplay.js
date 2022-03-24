import { useState, useEffect } from "react";
import { fetchSWAPI } from "../services/fetchSWAPI";

export default function ShipDisplay (props) {
    const [starship, setStarship] = useState([]);

    useEffect(() => {
        fetchSWAPI()
        .then(response => response.json())
        .then(data => setStarship(data));
    }, []);

    return (
        console.log(starship.result[0])
    );
};