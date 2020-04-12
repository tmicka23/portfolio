import React from "react";
import "./App.css";
import gears from "./Gears.gif";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to <br />
          Mickaël Thely's Portfolio
        </h1>
        <h3>This application is under building ...</h3>
        <img src={gears} alt="app is under building" className="machine" />
      </header>
    </div>
  );
}

export default App;
