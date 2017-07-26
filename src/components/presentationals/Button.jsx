import React from 'react';

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
        console.log('click');
        console.log(e);
        
        this.setState({
            title: this.state.clickedTitle
        });
    }
    
    render() {
        return (
            <a className="App-button" onClick={this.handleOnClick} href={this.state.href}>{this.state.title}</a>
        );
      }
}

export default Button;