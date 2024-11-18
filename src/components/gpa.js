import React from "react";
import Calculator from "./components/Calculator";
import "../styles/gpa.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo"><span class='PES'>PES</span><span class='to'>to</span></div>
      </header>
      <Calculator />
    </div>
  );
}

export default App;
