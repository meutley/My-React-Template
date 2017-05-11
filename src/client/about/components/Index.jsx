import React from 'react';
import PropTypes from 'prop-types';

class AboutIndex extends React.Component {
    render () {
        return (
            <h1>About</h1>
        )
    }
}

AboutIndex.contextTypes = {
    appState: PropTypes.func
};

export default AboutIndex;