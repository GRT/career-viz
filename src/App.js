import React, { Component } from 'react';
import logo from './static/GRT-logo.png';
import './App.css';
import JobSearch from './components/JobSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GRT Career Visualization Tool</h2>
        </div>
        <div className="App-intro">
          <JobSearch/>
        </div>
      </div>
    );
  }
}

export default App;
