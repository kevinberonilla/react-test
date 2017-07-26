import React from 'react';
import { Link } from 'react-router-dom';

/* --------------------------------------------------
Button Class
-------------------------------------------------- */
class Button extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: this.props.title || 'No Title Provided',
            clickedTitle: this.props.clickedTitle || this.props.title || 'No Title Provided',
            href: this.props.href || '#'
        }
        
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    
    handleOnClick(e) {
        console.log(e);
        
        this.setState({
            title: this.state.clickedTitle
        });
    }
    
    render() {
        return (
            <Link to={this.state.href} className="App-button__container">
                <button className="App-button" onClick={this.handleOnClick}>{this.state.title}</button>
            </Link>
        );
      }
}

export default Button;