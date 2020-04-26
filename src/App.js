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
      <main>
        Feel free to contact me at :
        <ul>
          <li>
            <a
              href="mailto:contact@mickael-thely.me"
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-envelope"></i>&nbsp; contact@mickael-thely.me
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/mickael-thely"
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-linkedin-square"></i>&nbsp;
              LinkedIn.com/in/mickael-thely
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tmicka23"
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-github-square"></i>&nbsp; Github.com/tmicka23
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
