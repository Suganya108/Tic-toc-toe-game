import './App.css';

import React, { Component } from 'react';

import Game from './Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <p className="App-intro">
          <Game></Game>
        </p>
      </div>
    );
  }
}

export default App;
