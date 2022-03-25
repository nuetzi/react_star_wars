export default function APIrequests () {
    return(
        fetch("https://swapi.dev/api/starships/")
            .then((response) => response.json())
            .catch((error) => error.message)
    );
};