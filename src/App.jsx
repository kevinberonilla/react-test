import React, { Component } from 'react';

/* --------------------------------------------------
Images
-------------------------------------------------- */
import logo from './logo.svg';

/* --------------------------------------------------
Components
-------------------------------------------------- */
import Button from './components/button/Button.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">To get started, edit <code>src/App.jsx</code> and save to reload. <span><Button title="Test Button" /></span></p>
      </div>
    );
  }
}

export default App;