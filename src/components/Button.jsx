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
            target: this.props.target || '',
            className: this.props.className || '',
            external: this.props.external || false
        }
    }
    
    render() {
        var target = this.state.target;
        var className = this.state.className;
        var title = this.state.title;
        var href = this.state.href;
        var external = this.state.external;
        
        if (external === true) {
            return (
                <a href={href} {...target ? {target: target} : null} className={'reactTest-button' + (className ? ' ' + className : '')} >{title}</a>
            );
        } else {
            return (
                <Link to={href} {...target ? {target: target} : null} className={'reactTest-button' + (className ? ' ' + className : '')} >{title}</Link>
            );
        }
      }
}

export default Button;