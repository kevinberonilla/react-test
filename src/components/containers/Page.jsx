import React from 'react';

/* --------------------------------------------------
Components
-------------------------------------------------- */
import Button from '../presentationals/Button.jsx';
import Header from '../presentationals/Header.jsx';

/* --------------------------------------------------
PageOne Class
-------------------------------------------------- */
class Page extends React.Component {
    render() {        
        return (
            <div className="App">
                <Header />
                <p>This is another page.</p>
                <Button title="Go Back" href="/" />
            </div>
        );
    }
}

export default Page;