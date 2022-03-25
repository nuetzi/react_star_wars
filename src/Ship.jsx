import React from "react";
import { useState, useEffect } from "react";
import APIrequests from "./services/APIrequests";

export default function Ship () {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        APIrequests()
            .then((response) => setShips(response.results))
            .catch((error) => error.message)
    }, []);

    return (
        <div className="shipsContainer">
            {ships.map((each, i) => {
                return(
                    <div className="starship" key={i}>
                        {each.name}
                    </div>
                );
            })}
        </div>
    );
};