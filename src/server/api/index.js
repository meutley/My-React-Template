var testEndpoint = require('./test-endpoint');

module.exports = {
    init: function (app) {
        testEndpoint.init(app);
    }
}