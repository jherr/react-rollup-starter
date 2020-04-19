import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div style={{ fontSize: 72, width: 1200, margin: "auto" }}>
    <div>Hi there, I'm React from Rollup.</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
