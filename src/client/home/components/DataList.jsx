import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class DataList extends React.Component {
    _loadData() {
        var appState = this.context.appState;

        axios
            .get('/api/test-endpoint')
            .then(function (data) {
                appState({
                    testData: data.data
                });
            });
    }

    _getListItems() {
        var listItems = [];

        var data = this.context.appState('testData');
        if (data && data.length > 0) {
            for (var x = 0; x < data.length; ++x) {
                listItems.push(<li key={data[x].id}><a href={'#/view/' + data[x].id}>{data[x].name}</a></li>);
            }
        }

        return listItems;
    }

    componentWillMount() {
        this._loadData();
    }

    render() {
        var listItems = this._getListItems();

        return (
            <div>
                <h3>DataList</h3>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

DataList.contextTypes = {
    appState: PropTypes.func
};

export default DataList;