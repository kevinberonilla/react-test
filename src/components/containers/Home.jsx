import React from 'react';

/* --------------------------------------------------
Components
-------------------------------------------------- */
import Button from '../presentationals/Button.jsx';

/* --------------------------------------------------
PageOne Class
-------------------------------------------------- */
class Home extends React.Component {
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
            {
                title: 'Go to Page',
                href: '/page'
            },
        ]
        
        for (var i = 0; i < buttonData.length; i++) {
            buttons[i] = <Button title={buttonData[i].title} clickedTitle={buttonData[i].clickedTitle} href={buttonData[i].href} />;
        }
        
        return (
            <div className="App">
                <p className="App-intro">{buttons}</p>
            </div>
        );
    }
}

export default Home;