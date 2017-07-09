import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './w3.css'
import MyRouter from './Router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Redux Playground</h2>
        </div>
        <p className="App-intro">
          This app keep track of various redux experiments based on Dan Abramov's
          &nbsp;
          <a href="https://egghead.io/courses/getting-started-with-redux">
            Getting Started with Redux videos
          </a>
        </p>
        <MyRouter/>
      </div>
    );
  }
}

export default App;
