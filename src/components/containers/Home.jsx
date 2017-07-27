import React from 'react';

/* --------------------------------------------------
Components
-------------------------------------------------- */
import Button from '../presentationals/Button.jsx';
import Header from '../presentationals/Header.jsx';


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
            buttons[i] = <Button key={'button ' + i} title={buttonData[i].title} clickedTitle={buttonData[i].clickedTitle} href={buttonData[i].href} />;
        }
        
        return (
            <div className="App">
                <Header />
                <div className="App-container">
                    <p className="App-intro">{buttons}</p>
                </div>
            </div>
        );
    }
}

export default Home;