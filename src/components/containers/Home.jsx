import React from 'react';

/* --------------------------------------------------
Components
-------------------------------------------------- */
import Header from '../presentationals/Header.jsx';
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
            buttons[i] = <Button key={'button ' + i} title={buttonData[i].title} href={buttonData[i].href} />;
        }
        
        return (
            <div className="reactTest">
                <Header />
                <main className="reactTest-container">
                    {buttons}
                </main>
            </div>
        );
    }
}

export default Home;