import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import './App.css';

// The root of the site of which components are rendered in
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
