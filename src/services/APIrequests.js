export const BASE_URL = "https://swapi.dev/api";

const createURL = (base, path) => `${base}${path}`;

export const getShips = () => [
    createURL(BASE_URL, "/starships/"),
    {
        method: "GET",
    }
];