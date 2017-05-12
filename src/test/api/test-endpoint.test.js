let chai = require('chai');
let assert = chai.assert;

let DataPredicates = require('../../server/api/test-endpoint/data-predicates');

describe('data-predicates', function () {
    beforeEach(function () {
        this.data = [
            {
                id: 1
            }, {
                id: 2
            }, {
                id: 3
            }
        ]
    });

    it('should return matches when filtered', function () {
        var results = this.data.filter(DataPredicates.build(1).getById);

        assert.isTrue(results != null);
        assert.equal(1, results.length);
        assert.equal(1, results[0].id);
    });

    it('should return empty when no matches', function () {
        var results = this.data.filter(DataPredicates.build(10).getById);

        assert.isTrue(results != null);
        assert.equal(0, results.length);
    });
});