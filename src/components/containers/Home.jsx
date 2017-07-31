import React from 'react';

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
            data: this.props.data || []
        }
        
        const URI = 'https://cdn.contentful.com';
        var spaceId = 'oq5pma2rf0jg';
        var apiKey = 'bfaffc825e3e5cd47ef44ab90661e671163b158f5727e3e053cb132daf258eca';
        var contentTypeId = '2PqfXUJwE8qSYKuM0U6w8M'; // Products
        var orderBy = 'sys.createdAt';
        var endpoint = `${URI}/spaces/${spaceId}/entries?content_type=${contentTypeId}&order=${orderBy}&access_token=${apiKey}`;
        console.log(endpoint);
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
                    data: json.items
                });
                console.log(json.items);
            });
    }
    render() {
        var data = this.state.data;
        var products = [];
        
        for (var i = 0; i < data.length; i++) {
            products.push(
                <li key={'item ' + i} className="reactTest-products__item">
                    <div className="reactTest-products__item__image">
                        <img src={data[i].fields.image[0]} />
                    </div>
                    <h4 className="reactTest-products__item__title">{data[i].fields.productName}</h4>
                </li>
            );
        }
        
        var buttons = [];
        var buttonData = [ // Fake data
            {
                title: 'Go to Page Template',
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
        
        for (var i = 0; i < buttonData.length; i++) {
            buttons[i] = <Button key={'button ' + i} title={buttonData[i].title} href={buttonData[i].href} />;
        }
        
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