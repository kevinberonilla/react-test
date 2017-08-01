import React from 'react';
import { Link } from 'react-router-dom';

/* --------------------------------------------------
Components
-------------------------------------------------- */
import Header from '../presentationals/Header.jsx';
import Button from '../presentationals/Button.jsx';


/* --------------------------------------------------
PageOne Class
-------------------------------------------------- */
class Home extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            productData: this.props.data || [],
            includedAssets: this.props.includes || []
        }
        
        const URI = 'https://cdn.contentful.com';
        var spaceId = 'oq5pma2rf0jg';
        var apiKey = 'bfaffc825e3e5cd47ef44ab90661e671163b158f5727e3e053cb132daf258eca';
        var contentTypeId = '2PqfXUJwE8qSYKuM0U6w8M'; // Products
        var orderBy = 'sys.createdAt';
        var endpoint = `${URI}/spaces/${spaceId}/entries?content_type=${contentTypeId}&order=${orderBy}&access_token=${apiKey}`;
        var self = this;
        
        fetch(endpoint, {
                method: 'GET'
            }).then(function(response) {
                if (response.ok) {
                    return response.json()
                } else {
                    alert(response.status + ': ' + response.statusText);
                }
            }).then(function(json) {
                self.setState({
                    productData: json.items,
                    includedAssets: json.includes.Asset
                });
            });
    }
    render() {
        var productData = this.state.productData;
        var includedAssets = this.state.includedAssets;
        var products = []
        
        productData.forEach(function(product, index) {
            var imgId = product.fields.image[0].sys.id;
            var imgUrl = '';
            
            for (var i = 0; i < includedAssets.length; i++) {
                if (typeof(includedAssets[i].sys.id) !== 'undefined' && includedAssets[i].sys.id === imgId) {
                    imgUrl = includedAssets[i].fields.file.url;
                    break;
                }
            }
            
            products.push(
                <li key={'item ' + index} className="reactTest-products__item">
                    <Link to={`/product/?id=${product.sys.id}`}>
                        <div className="reactTest-products__item-image">
                            <img src={imgUrl} alt={product.fields.productName}/>
                        </div>
                        <h4 className="reactTest-products__item-title">{product.fields.productName}</h4>
                    </Link>
                </li>
            );
        });
        
        var buttons = [];
        var buttonData = [ // Fake data
            {
                title: 'Go to Product Template',
                href: '/product'
            },
            {
                title: 'Button 1 Title',
                clickedTitle: 'New Button 1 Title'
            },
            {
                clickedTitle: 'New Button 2 Title'
            },
            {
                title: 'Button 3 Title'
            },
            {
                title: 'Button 4 Title',
                clickedTitle: 'New Button 4 Title'
            }
        ]
        
        buttonData.forEach(function(button, index) {
            buttons[index] = <Button key={'button ' + index} title={button.title} href={button.href} />;
        });
        
        return (
            <div className="reactTest">
                <Header />
                <main className="reactTest-container">
                    <div>{buttons}</div>
                    <ul className="reactTest-products">
                        {products}
                    </ul>
                </main>
            </div>
        );
    }
}

export default Home;