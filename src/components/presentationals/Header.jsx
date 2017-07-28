import React from 'react';
//import { Link } from 'react-router-dom';

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
            <header className="reactTest-header">
                <div className="reactTest-container">
                    <img src={logo} className="reactTest-logo" alt="logo" />
                    <h2>React and Contentful Test</h2>
                    {/*
                    <nav className="reactTest-nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product/:id">Product</Link></li>
                        </ul>
                    </nav>
                    */}
                </div>
            </header>
        );
      }
}

export default Header;