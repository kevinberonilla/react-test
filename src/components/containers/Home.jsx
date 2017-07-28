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
        const ENDPOINT = 'https://cdn.contentful.com';
        var apiKey = 'bfaffc825e3e5cd47ef44ab90661e671163b158f5727e3e053cb132daf258eca';
        var spaceId = 'oq5pma2rf0jg';
        
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