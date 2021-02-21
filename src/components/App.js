import React, {Component, useState} from "react";
import '../styles/App.css';


export default function App() {
  let time = new Date().toLocaleTimeString();

  const [CurrTime, setTime] = useState(time);
  const UpdateData = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateData, 1000);
  return (
    <div id="main">
      <h1 id="time">{CurrTime}</h1>
    </div>
  );
}


export default App;
