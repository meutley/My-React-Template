import React from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import {Router,hashHistory} from 'react-router';

import AppRoutes from '../routes/AppRoutes.jsx';

class App extends React.Component {
    constructor() {
        super(...arguments);
        
        this.state = {};
    }

    appState(obj) {
        if (typeof obj === 'string') {
            return this.state[obj];
        }

        this.setState(obj);
    }

    getChildContext() {
        return {
            appState: this.appState.bind(this)
        };
    }

    render () {
        return (
            <Router history={hashHistory}>
                {AppRoutes}
            </Router>
        )
    }
}

App.childContextTypes = {
    appState: PropTypes.func
};

render(<App/>, document.getElementById('app'));