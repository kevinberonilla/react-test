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
            <div className="reactTest">
                <Header />
                <main className="App-container">
                    <p>This is another page.</p>
                    <Button title="Go Back" href="/" />
                </main>
            </div>
        );
    }
}

export default Page;