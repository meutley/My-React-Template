import React from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';

import HomeIndex from '../home/components/Index.jsx';
import AboutIndex from '../about/components/Index.jsx';

const routes = (
    <div>
        <Route path="/" component={HomeIndex}/>
        <Route path="/about" component={AboutIndex}/>
    </div>
);

class AppContainer extends React.Component {
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
                {routes}
            </Router>
        )
    }
}

AppContainer.childContextTypes = {
    appState: PropTypes.func
};

render(<AppContainer/>, document.getElementById('app'));