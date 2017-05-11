import React from 'react';

class HomeIndex extends React.Component {
    render () {
        return (
            <h1>Home</h1>
        )
    }
}

HomeIndex.contextTypes = {
    appState: React.PropTypes.func
};

export default HomeIndex;