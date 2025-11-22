import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  function start() {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }

  function stop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function Reset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }

  return (
    <>
      <h1>StopWatch is: {time}</h1>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={Reset}>Reset</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
