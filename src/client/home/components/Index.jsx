import React from 'react';
import PropTypes from 'prop-types';

import DataList from './DataList.jsx';

class HomeIndex extends React.Component {
    render () {
        return (
            <div>
                <h1>Home</h1>
                <DataList/>
            </div>
        )
    }
}

HomeIndex.contextTypes = {
    appState: PropTypes.func
};

export default HomeIndex;