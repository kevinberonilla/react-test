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
        
        const ENDPOINT = 'https://cdn.contentful.com';
        var spaceId = 'oq5pma2rf0jg';
        var apiKey = 'bfaffc825e3e5cd47ef44ab90661e671163b158f5727e3e053cb132daf258eca';
        var self = this;
        
        // Fix this endpoint to only get products in the Toys category
        fetch(`${ENDPOINT}/spaces/${spaceId}/entries?access_token=${apiKey}`, {
                method: 'GET'
            }).then(function(response) {
                if (response.ok) {
                    return response.json()
                } else {
                    // Handle errors
                }
            }).then(function(json) {
                self.setState({
                    data: json.items
                });
                console.log(json.items)
            });
    }
    render() {
        var data = this.state.data;
        var list = [];
        
        for (var i = 0; i < data.length; i++) {
            list.push(
                <div key={'item ' + i}>{data[i].fields.productName}</div>
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
                    <div>{list}</div>
                </main>
            </div>
        );
    }
}

export default Home;