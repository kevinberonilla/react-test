import React from 'react';
import { Link } from 'react-router-dom';

/* --------------------------------------------------
Images
-------------------------------------------------- */
import logo from '../../logo.svg';

/* --------------------------------------------------
Button Class
-------------------------------------------------- */
class Header extends React.Component {
    render() {
        return (
            <div className="App-header">
                <div className="App-container">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                    <nav className="App-nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/page">Page</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
      }
}

export default Header;