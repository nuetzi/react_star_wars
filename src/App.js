import "./App.css";
import ShipsInfo from "./ShipsInfo";

export default function App () {
  let state = ShipsInfo;
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