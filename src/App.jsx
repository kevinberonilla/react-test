import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, BrowserHistory } from 'react-router-dom';

/* --------------------------------------------------
Styles
-------------------------------------------------- */
import './index.css';

/* --------------------------------------------------
Pages
-------------------------------------------------- */
import Home from './components/containers/Home.jsx';
import Page from './components/containers/Page.jsx';

/* --------------------------------------------------
App Class
-------------------------------------------------- */
class App extends Component {
    render() {
        var history;
        
        return (
            <BrowserRouter history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/page" component={Page} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;