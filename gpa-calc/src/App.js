import React from "react";
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo"><a href="../../landing.html"><span class='PES'>PES</span><span class='to'>to</span></a></div>
      </header>
      <Calculator />
    </div>
  );
}

export default App;
