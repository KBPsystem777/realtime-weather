import React, { Component } from 'react';
import './App.css';
import GetWeather from './components/Weather'

const rooter = document.getElementById('root').innerHTML="this is root"

class App extends Component {
  render() {
    return (
      <div className="App">
        <p id="root">{rooter}</p>
        <GetWeather />
      </div>
    );
  }
}

export default App;
