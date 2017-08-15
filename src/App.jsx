import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

/* --------------------------------------------------
Styles
-------------------------------------------------- */
import './index.css';

/* --------------------------------------------------
Pages
-------------------------------------------------- */
import Home from './components/Home.jsx';
import Product from './components/Product.jsx';

/* --------------------------------------------------
App Class
-------------------------------------------------- */
export default class App extends Component {
    render() {
        var history;
        var store;
        
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/product/" component={Product} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}