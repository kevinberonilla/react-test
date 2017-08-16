import React from 'react';

/* --------------------------------------------------
Images
-------------------------------------------------- */
import logo from '../logo.svg';

/* --------------------------------------------------
Button Class
-------------------------------------------------- */
class Header extends React.Component {
    render() {
        return (
            <header className="reactTest-header">
                <div className="reactTest-container">
                    <a href="http://kevinberonilla.com" target="_blank"><img src={logo} className="reactTest-logo" alt="logo" /></a>
                    <h2>React and Contentful Test</h2>
                    <p><small>My personal sandbox for trying out features in React.js and Contentful's API</small></p>
                </div>
            </header>
        );
      }
}

export default Header;