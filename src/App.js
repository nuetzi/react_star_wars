import React from "react";
import "./App.css";
import Ship from "./Ship";

export default function App () {
    return (
      <div className="appContainer">
        {Ship()}
      </div>
    );
};