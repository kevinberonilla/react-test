import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/* --------------------------------------------------
Styles
-------------------------------------------------- */
import './index.css';

/* --------------------------------------------------
Pages
-------------------------------------------------- */
import Home from './components/pages/Home.jsx';

/* --------------------------------------------------
App Class
-------------------------------------------------- */
class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        );
    }
}

export default App;