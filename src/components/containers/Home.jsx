import React from 'react';
import { Link } from 'react-router-dom';

/* --------------------------------------------------
Components
-------------------------------------------------- */
import Header from '../presentationals/Header.jsx';


/* --------------------------------------------------
PageOne Class
-------------------------------------------------- */
class Home extends React.Component {
    constructor(props) {
        super(props);
        
        // Set default state
        this.state = {
            productData: this.props.data || [],
            includedAssets: this.props.includes || [],
            loading: this.props.loading || true
        }
        
        const URI = 'https://cdn.contentful.com';
        var spaceId = 'oq5pma2rf0jg';
        var apiKey = 'bfaffc825e3e5cd47ef44ab90661e671163b158f5727e3e053cb132daf258eca';
        var contentTypeId = '2PqfXUJwE8qSYKuM0U6w8M'; // Products
        var orderBy = 'sys.createdAt';
        var endpoint = `${URI}/spaces/${spaceId}/entries?content_type=${contentTypeId}&order=${orderBy}&access_token=${apiKey}`;
        
        // Bind the 'this' keyword for component methods
        this.getProductList = this.getProductList.bind(this);
        
        // Get the data
        this.getProductList(endpoint);
    }
    
    getProductList(endpoint) {
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
                productData: json.items, // Array of entries
                includedAssets: json.includes.Asset, // Array of assets included with the entries
                loading: false
            });
        });
    }
    
    render() {
        var loading = this.state.loading;
        var body;
        
        if (loading) {
            body = (
                <div className="reactTest-loading">
                    <ul className="reactTest-loading__animation">
                        <li>
                            <span className="reactTest-loading__dots"></span>
                        </li>
                    </ul>
                </div>
            );
        } else {
            var productData = this.state.productData;
            var includedAssets = this.state.includedAssets;
            var products = [];
            
            console.log(productData)
            
            // Build the list of products
            productData.forEach((product, index) => {
                var imgId = product.fields.image[0].sys.id;
                var imgUrl = '';
                
                // Find the asset associated with the current product
                for (var i = 0; i < includedAssets.length; i++) {
                    if (typeof(includedAssets[i].sys.id) !== 'undefined' && includedAssets[i].sys.id === imgId) {
                        imgUrl = includedAssets[i].fields.file.url;
                        break;
                    }
                }
                
                products[index] = (
                    <li key={'item ' + index} className="reactTest-products__item">
                        <Link to={`/product/?id=${product.sys.id}`}>
                            <div className="reactTest-products__item-image">
                                <img src={imgUrl} alt={product.fields.productName}/>
                            </div>
                            <div className="reactTest-products__item-title">
                                <h4 className="reactTest-margin-bottom--small reactTest-margin-top--none">{product.fields.productName}</h4>
                                <p className="reactTest-margin--none">${product.fields.price}</p>
                            </div>
                        </Link>
                    </li>
                );
            });
            
            body = (
                <ul className="reactTest-products">
                    {products}
                </ul>
            )
        }
        
        return (
            <div className="reactTest">
                <Header />
                <main className="reactTest-container">
                    {body}
                </main>
            </div>
        );
    }
}

export default Home;