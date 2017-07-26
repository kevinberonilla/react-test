import React from 'react';

/* --------------------------------------------------
Components
-------------------------------------------------- */
import Button from '../button/Button.jsx';

/* --------------------------------------------------
Images
-------------------------------------------------- */
import logo from '../../logo.svg';

/* --------------------------------------------------
PageOne Class
-------------------------------------------------- */
class PageOne extends React.Component {
    render() {
        var buttons = [];
        var buttonData = [ // Fake data
            {
                title: 'Button 1 Title',
                clickedTitle: 'New Button 1 Title'
            },
            {
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

export default PageOne;