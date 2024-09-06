import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [second, setSecond] = useState(0);
  const [minit, setMinit] = useState(0);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSecond(second + 1);
      if (second === 59) {
        setMinit(minit + 1);
        setSecond(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const restart = () => {
    setSecond(0);
    setMinit(0);
  };
  const stop = () => {
    clearInterval(timer);
  };
  return (
    <div className="App">
      <h1>TIMER</h1>
      <h1>
        {minit < 10 ? "0" + minit : minit}:{second < 10 ? "0" + second : second}
      </h1>
      <button className="App-link" onClick={restart}>
        Restatrt
      </button>
      <button className="App-link" onClick={stop}>
        Stop
      </button>
    </div>
  );
}

export default App;
