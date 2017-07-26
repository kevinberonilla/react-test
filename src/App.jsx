import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* --------------------------------------------------
Styles
-------------------------------------------------- */
import './index.css';

/* --------------------------------------------------
Pages
-------------------------------------------------- */
import Header from './components/presentationals/Header.jsx';
import Home from './components/containers/Home.jsx';
import Page from './components/containers/Page.jsx';

/* --------------------------------------------------
App Class
-------------------------------------------------- */
class App extends Component {
    render() {
        var history;
        
        return (
            <div className="App">
                <Header />
                <div className="App-container">
                    <BrowserRouter history={history}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/page" component={Page} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default App;