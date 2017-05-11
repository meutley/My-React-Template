var _testData = [];

for (let x = 1; x <= 25; ++x) {
    _testData.push({
        id: x,
        name: 'Item ' + x,
        description: 'Item #' + x + ' in the list of data.'
    });
}

module.exports = {
    get: function () {
        if (arguments.length === 0) {
            // Get all
            return _testData;
        } else {
            // Filter with a predicate function
            var results = null;
            var predicate = arguments[0];
            if (typeof predicate === 'function') {
                results = _testData.filter(predicate);
            }

            return results;
        }
    }
}