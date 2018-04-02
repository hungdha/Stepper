import React, { Component } from 'react';
import Stepper from "./Stepper"

class App extends Component {
  render() {
    return (
      <div>
        <Stepper stage={1}/>
      </div>
    );
  }
}

export default App;
