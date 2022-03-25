import { useState, useEffect } from "react";
import fetchSWAPI from "./services/fetchSWAPI";

export default function FetchShip () {
  const [starships, setStarships] = useState([]);

  const fetchShip = async () => {
    const response = await fetchSWAPI;
    const data = await response.json();
    setStarships(data);
    console.log(data.results[0].name);  // Should output 1st ship name
  };

  useEffect(() => {
    fetchShip();
  }, []);
  
  return (
    console.log(starships)
  );
}