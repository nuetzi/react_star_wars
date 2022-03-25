import React from "react";
import { useState, useEffect } from "react";
import APIrequests from "./services/APIrequests";

export default function Ship () {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        APIrequests()
            .then((response) => setShips(response.results))
    }, []);

    return (
        <div className="shipsContainer">
            {ships.map((each, i) => {
                return(
                    <div id="starship" key={i}>
                        {each.name}
                    </div>
                );
            })}
        </div>
    );
};