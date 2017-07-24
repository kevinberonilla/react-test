import React from 'react';

class Button extends React.Component {
  render() {
    return (
        <button>{this.props.title}</button>
    );
  }
}

export default Button;