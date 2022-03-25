import React from "react";
import useShips from "./useShips";
import Ship from "./Ship";

export default function ShipList () {
    const [ships, error] = useShips();

    return (
        <div>
            {error !== null
                ? <p>Error fetching starships: {error}</p>
                : ships.map(item => <Ship ship={item} />)}
        </div>
    );
};