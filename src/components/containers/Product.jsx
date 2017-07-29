import React from 'react';

/* --------------------------------------------------
Components
-------------------------------------------------- */
import Header from '../presentationals/Header.jsx';
import Button from '../presentationals/Button.jsx';

/* --------------------------------------------------
Product Class
-------------------------------------------------- */
class Product extends React.Component {
    render() {        
        return (
            <div className="reactTest">
                <Header />
                <main className="reactTest-container">
                    <p>This is another page.</p>
                    <Button title="Go Back" href="/" />
                </main>
            </div>
        );
    }
}

export default Product;