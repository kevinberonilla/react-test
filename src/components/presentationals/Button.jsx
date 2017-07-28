import React from 'react';
import { Link } from 'react-router-dom';

/* --------------------------------------------------
Button Class
-------------------------------------------------- */
class Button extends React.Component {
    constructor(props) {
        super(props);
        
        // Set default state
        this.state = {
            title: this.props.title || 'No Title Provided',
//            clickedTitle: this.props.clickedTitle || this.props.title || 'No Title Provided',
            href: this.props.href || '#'
        }
        
        // Bind the 'this' keyword for all component methods
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    
    handleOnClick(e) {
        console.log(e);
        
        /*this.setState({
            title: this.state.clickedTitle
        });*/
    }
    
    render() {
        console.log('rendered!')
        return (
            <Link to={this.state.href} className="reactTest-button" onClick={this.handleOnClick}>{this.state.title}</Link>
        );
      }
}

export default Button;