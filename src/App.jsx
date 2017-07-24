import React, { Component } from 'react';

/* --------------------------------------------------
Images
-------------------------------------------------- */
import logo from './logo.svg';

/* --------------------------------------------------
Components
-------------------------------------------------- */
import Button from './components/button/Button.jsx';

class App extends Component {
    render() {
        var buttons = [];
        var buttonData = [ // Fake data
            {
                title: 'Button 1 Title',
                clickedTitle: 'New Button 1 Title'
            },
            {
                title: 'Button 2 Title',
                clickedTitle: 'New Button 2 Title'
            },
            {
                title: 'Button 3 Title'
            },
            {
                title: 'Button 4 Title',
                clickedTitle: 'New Button 4 Title'
            },
        ]
        
        for (var i = 0; i < buttonData.length; i++) {
            buttons[i] = <Button title={buttonData[i].title} clickedTitle={buttonData[i].clickedTitle} />;
        }
        
        return (
            <div className="App">
               <div className="App-header">
                   <img src={logo} className="App-logo" alt="logo" />
                   <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">{buttons}</p>
            </div>
        );
    }
}

export default App;