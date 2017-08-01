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
    constructor(props) {
        super(props);
        
        var urlParams = new URLSearchParams(this.props.location.search); // Get id param from URL
        
        // Set default state
        this.state = {
            id: this.props.id || urlParams.get('id') || ''
        }
    }
    render() {
        console.log(this.state.id);
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