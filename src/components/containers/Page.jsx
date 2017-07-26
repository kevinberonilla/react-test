import React from 'react';

/* --------------------------------------------------
Components
-------------------------------------------------- */
import Button from '../presentationals/Button.jsx';

/* --------------------------------------------------
PageOne Class
-------------------------------------------------- */
class Page extends React.Component {
    render() {        
        return (
            <div className="App">
                <p>This is another page.</p>
                <Button title="Go Back" href="/" />
            </div>
        );
    }
}

export default Page;