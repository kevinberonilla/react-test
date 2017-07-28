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
        const ENDPOINT = 'https://cdn.contentful.com';
        var apiKey = 'bfaffc825e3e5cd47ef44ab90661e671163b158f5727e3e053cb132daf258eca';
        var spaceId = 'oq5pma2rf0jg';
        
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

export default Product;