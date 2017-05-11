import React from 'react';
import PropTypes from 'prop-types';

class HomeIndex extends React.Component {
    render () {
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}

HomeIndex.contextTypes = {
    appState: PropTypes.func
};

export default HomeIndex;