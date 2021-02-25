import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

function App() {
  let time = new Date().toLocaleTimeString();

  const [CurrTime, setTime] = useState(time);
  const UpdateData = () => {
    let date = new Date();
    let updateHour = date.getHours();
    let updateMinute = date.getMinutes();
    let updateSecond = date.getSeconds();
    let updateAMPM = updateHour < 13 ? "AM" : "PM";
    updateHour = updateHour > 12 ? updateHour - 12 : updateHour;
    if (updateMinute < 10) updateMinute = `0${updateMinute}`;
    if (updateSecond < 10) updateSecond = `0${updateSecond}`;
    let updatedTime = `${updateHour}:${updateMinute}:${updateSecond} ${updateAMPM}`;
    setTime(updatedTime);
  };
  useEffect(() => {
    let set = setInterval(UpdateData, 1000);
    return () => {
      clearInterval(set);
    };
  }, []);
  return (
    <div id="main" className="Clock">
      <h1 id="time">{CurrTime}</h1>
    </div>
  );
}

export default App;
