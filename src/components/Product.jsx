// To do: Check if id is valid/present

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* --------------------------------------------------
Components
-------------------------------------------------- */
import Header from './Header.jsx';
import Button from './Button.jsx';

/* --------------------------------------------------
Product Class
-------------------------------------------------- */
export default class Product extends React.Component {
    constructor(props) {
        super(props);
        
        // Set default state        
        var urlParams = new URLSearchParams(this.props.location.search); // Get id param from URL
        
        this.state = {
            id: this.props.id || urlParams.get('id') || '', // Id of the product
            product: this.props.product || {}, // Object with product fields
            imageUrl: this.props.imageUrl || '',
            loading: this.props.loading || false
        }
        
        // Bind the 'this' keyword for component methods
        this.getProductData = this.getProductData.bind(this);
        this.getProductImage = this.getProductImage.bind(this);
    }
    
    componentDidMount() {
        const URI = 'https://cdn.contentful.com';
        var spaceId = 'oq5pma2rf0jg';
        var apiKey = 'bfaffc825e3e5cd47ef44ab90661e671163b158f5727e3e053cb132daf258eca';
        var productDataEndpoint = `${URI}/spaces/${spaceId}/entries/${this.state.id}?access_token=${apiKey}`;
        var imageDataEndpointTemplate = `${URI}/spaces/${spaceId}/assets/{id}?access_token=${apiKey}`;
        
        this.setState({
            loading: true
        });
        
        // Get the data
        this.getProductData(productDataEndpoint, imageDataEndpointTemplate);
    }
    
    getProductData(endpoint, imageDataEndpointTemplate) {     
        fetch(endpoint, {
            method: 'GET'
        }).then((response) => {
            if (response.ok) { // Status 200
                return response.json();
            } else { // Handle errors
                alert(response.status + ': ' + response.statusText);
            }
        }).then((json) => {
            var product = json.fields;
            var imageId = product.image[0].sys.id;
            var imageDataEndpoint = imageDataEndpointTemplate.replace('{id}', imageId);
            
            this.getProductImage(imageDataEndpoint, product);
        });
    }
    
    getProductImage(endpoint, product) {
        fetch(endpoint, {
            method: 'GET'
        }).then((response) => {
            if (response.ok) { // Status 200
                return response.json();
            } else { // Handle errors
                alert(response.status + ': ' + response.statusText);
            }
        }).then((json) => {
            var imageUrl = json.fields.file.url;
            
            this.setState({
                product: product,
                imageUrl: imageUrl,
                loading: false
            });
        });
    }
    
    render() {
        var loading = this.state.loading;
        var id = this.state.id;
        var product = this.state.product || {};
        var imageUrl = this.state.imageUrl || '';
        
        return (
            <div className="reactTest">
                <Header />
                <main className="reactTest-container">
                    {loading ? (
                        <div className="reactTest-loading" key="loading">
                            <ul className="reactTest-loading__animation">
                                <li>
                                    <span className="reactTest-loading__dots"></span>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <ReactCSSTransitionGroup transitionName="reactTest-fade" transitionAppear={true} transitionAppearTimeout={250} transitionEnterTimeout={250} transitionLeaveTimeout={250}>
                            <div className="reactTest-grid" key="product-content">
                                <div className="reactTest-col reactTest-product-image">
                                    <img src={imageUrl} alt={product.productName} />
                                </div>
                                <div className={'reactTest-col reactTest-product-content' + (loading ? '' : ' reactTest-product-content--show')}>
                                    <h2 className="reactTest-margin-top--none reactTest-margin-bottom--none">{product.productName}</h2>
                                    <h4 className="reactTest-margin-top--none">${product.price} <small>({product.quantity} remaining)</small></h4>
                                    <p>{product.productDescription}</p>
                                    <div className="reactTest-margin-top--large">
                                        <Button className="reactTest-button--neutral" title="Go Back" href="/" />
                                        <Button external={true} title="Buy Now" href={product.website} target="_blank" />
                                    </div>
                                </div>
                            </div>
                        </ReactCSSTransitionGroup>
                    )}
                </main>
            </div>
        );
    }
}