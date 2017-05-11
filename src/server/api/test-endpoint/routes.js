var Handler = require('./handler.js');

module.exports = {
    init: function (app) {
        app.get('/api/test-endpoint', function (req, res) {
            Handler(res).getAll();
        });

        app.get('/api/test-endpoint/:id', function (req, res) {
            var id = req.params.id;
            Handler(res).getById(id);
        });
    }
}