import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* --------------------------------------------------
Styles
-------------------------------------------------- */
import './index.css';

/* --------------------------------------------------
Pages
-------------------------------------------------- */
import Home from './components/containers/Home.jsx';
import Product from './components/containers/Product.jsx';

/* --------------------------------------------------
App Class
-------------------------------------------------- */
class App extends Component {
    render() {
        var history;
        
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product/:id" component={Product} />
                </Switch>
            </Router>
        );
    }
}

export default App;