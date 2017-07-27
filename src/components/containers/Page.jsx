import React from 'react';

/* --------------------------------------------------
Components
-------------------------------------------------- */
import Header from '../presentationals/Header.jsx';
import Button from '../presentationals/Button.jsx';

/* --------------------------------------------------
PageOne Class
-------------------------------------------------- */
class Page extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="App-container">
                    <p>This is another page.</p>
                    <Button title="Go Back" href="/" />
                </div>
            </div>
        );
    }
}

export default Page;