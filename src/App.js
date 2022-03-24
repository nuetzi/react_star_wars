import "./App.css";
import Ship from "./Ship";

export default function App () {
  let state = Ship;
    return (
      <div className="container">
        {
          state.map((each, i) => {
            return (
              <div key={i}>
                {<Ship starship = {each.starship} />}
              </div>
            )
          })
        }
      </div>
    );
};