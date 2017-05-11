var ResponseUtility = require('../../utilities/response-utility');
var TestStore = require('../../data/models/test-store');

var DataPredicates = require('./data-predicates');

module.exports = function (res) {
    return {
        getAll: function () {
            var results = TestStore.get();
            ResponseUtility.send(res, 200, results);
        },

        getById: function (id) {
            var results = TestStore.get(DataPredicates.build(id).getById);
            var result = results && results.length > 0 ? results[0] : null;

            if (result) {
                ResponseUtility.send(res, 200, result);
            } else {
                ResponseUtility.send(res, 404, 'Not found');
            }
        }
    }
}