import React from "react";
import "./App.css";
import RandomTextBackground from "./components/reactRandom/RandomTextBackground";

const App = () => {
  return (
    <>
      <div className="intro-container">
        <h1 className="intro-name">Dev Babarwal</h1>
      </div>
      <RandomTextBackground />
    </>
  );
};

export default App;
