export default function fetchSWAPI () {
    const URL = `https://swapi.dev/api/starships/`;
    return fetch(URL);
};