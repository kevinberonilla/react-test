import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: this.props.title || 'No Title Provided',
            clickedTitle: this.props.clickedTitle || 'No Clicked Title Provided'
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
            <button onClick={this.handleOnClick}>{this.state.title}</button>
        );
      }
}

export default Button;