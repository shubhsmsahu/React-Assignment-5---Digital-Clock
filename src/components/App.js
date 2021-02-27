import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        time: new Date()
    };
  }

componentDidMount(){
  console.log("Mounted is successfull")
    this.timerID = setInterval(() => {
        this.tick();
    }, 1000);
}

componentWillUnmount(){
  console.log("Component is Unmounted successfully")
    clearInterval(this.timerID);
}

tick(){
    this.setState({
        time: new Date(),
    });
}


  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.time.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default App;
