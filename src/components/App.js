import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

function App() {
  let time = new Date().toLocaleTimeString();

  const [CurrTime, setTime] = useState(time);
  const UpdateData = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  let set = setInterval(UpdateData, 1000);
  useEffect(() => {
    clearInterval(set);
  });
  return (
    <div id="main" className="Clock">
      <h1 id="time">{CurrTime}</h1>
    </div>
  );
}

export default App;
