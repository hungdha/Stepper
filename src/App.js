import React, { Component } from 'react';
import Stepper from "./Stepper"

class App extends Component {
  render() {
    return (
        <Stepper stage={1}/>
    );
  }
}

export default App;
