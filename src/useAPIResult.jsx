import React, { useState, useEffect } from "react";

export default function useAPIResult (request) {
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(request)
            .then(async (response) => {
                if (response.ok) {
                    setResults(await response.json());
                    setError(null);
                } else {
                    setError(await response.text());
                }
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [request]);

    return [results, error];
};