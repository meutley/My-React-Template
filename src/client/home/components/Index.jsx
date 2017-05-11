import React from 'react';
import PropTypes from 'prop-types';

import DataView from './DataView.jsx';

class HomeIndex extends React.Component {
    render () {
        return (
            <div>
                <h1>Home</h1>
                <DataView/>
            </div>
        )
    }
}

HomeIndex.contextTypes = {
    appState: PropTypes.func
};

export default HomeIndex;