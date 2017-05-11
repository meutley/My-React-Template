import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';

import HomeIndex from '../home/components/Index.jsx';
import AboutIndex from '../about/components/Index.jsx';

class AppContainer extends React.Component {
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
                <Route path="/" component={HomeIndex}/>
                <Route path="/about" component={AboutIndex}/>
            </Router>
        )
    }
}

AppContainer.childContextTypes = {
    appState: React.PropTypes.func
};

render(<AppContainer/>, document.getElementById('app'));