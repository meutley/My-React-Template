import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

class View extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {};
    }

    componentWillMount() {
        var id = this.props.routeParams.id;
        var self = this;
        
        axios
            .get('/api/test-endpoint/' + id)
            .then(function (response) {
                self.setState({
                    obj: response.data
                });
            });
    }

    render() {
        var obj = this.state['obj'];
        var result = null;
        if (!obj) {
            result = (
                <strong>Not found</strong>
            );
        } else {
            result = (
                <div>
                    <strong>Id:</strong> {obj.id}
                    <br/>
                    <strong>Name:</strong> {obj.name}
                    <br/>
                    <strong>Description:</strong> {obj.description}
                </div>
            );
        }

        return result;
    }
}

View.contextTypes = {
    appState: PropTypes.func
};

export default View;