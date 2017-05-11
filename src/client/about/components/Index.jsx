import React from 'react';

class AboutIndex extends React.Component {
    render () {
        return (
            <h1>About</h1>
        )
    }
}

AboutIndex.contextTypes = {
    appState: React.PropTypes.func
};

export default AboutIndex;