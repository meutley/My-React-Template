import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

class DataView extends React.Component {
    componentWillMount() {
        var self = this;

        axios
            .get('/api/test-endpoint')
            .then(function (res) {
                self.context.appState({
                    homeDataView: res.data
                });
            });
    }

    _getListItems() {
        var data = this.context.appState('homeDataView');
        var listItems = [];
        if (data) {
            for (var x = 0; x < data.length; x++) {
                listItems.push(<li key={data[x].index}>{data[x].display}</li>);
            }
        }

        return listItems;
    }

    render () {
        var listItems = this._getListItems();

        return (
            <div>
                <h1>DataView</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

DataView.contextTypes = {
    appState: PropTypes.func
};

export default DataView;