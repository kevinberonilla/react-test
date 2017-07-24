import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: this.props.title || 'No Title Provided'
        }
        
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    
    handleOnClick(e) {
        console.log('click');
        console.log(e);
        
        this.setState({ title: 'New Button Title' });
    }
    
    render() {
        return (
            <button onClick={this.handleOnClick}>{this.state.title}</button>
        );
      }
}

export default Button;