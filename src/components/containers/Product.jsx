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
        
        // Set default state        
        var urlParams = new URLSearchParams(this.props.location.search); // Get id param from URL
        
        this.state = {
            id: this.props.id || urlParams.get('id') || '', // Id of the product
            product: this.props.product || {}, // Object with product fields
        }
        
        const URI = 'https://cdn.contentful.com';
        var spaceId = 'oq5pma2rf0jg';
        var apiKey = 'bfaffc825e3e5cd47ef44ab90661e671163b158f5727e3e053cb132daf258eca';
        var include = 2;
        var endpoint = `${URI}/spaces/${spaceId}/entries/${this.state.id}?access_token=${apiKey}&include=${include}`;
        
        // Bind the 'this' keyword for component methods
        this.getProductData = this.getProductData.bind(this);
        
        // Get the data
        this.getProductData(endpoint);
    }
    
    getProductData(endpoint) {        
        fetch(endpoint, {
            method: 'GET'
        }).then((response) => {
            if (response.ok) { // Status 200
                return response.json();
            } else { // Handle errors
                alert(response.status + ': ' + response.statusText);
            }
        }).then((json) => {
            this.setState({
                product: json.fields
            });
        });
    }
    
    render() {
        console.log(this.state.product);
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