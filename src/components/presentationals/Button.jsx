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
            href: this.props.href || '#',
            target: this.props.href || ''
        }
    }
    
    render() {
        return (
            <Link to={this.state.href} className="reactTest-button" target={this.state.target}>{this.state.title}</Link>
        );
      }
}

export default Button;