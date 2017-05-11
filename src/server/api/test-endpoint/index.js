module.exports = {
    init: function (app) {
        app.get('/api/test-endpoint', function (req, res) {
            var response = [];

            for (var x = 1; x <= 10; x++) {
                response.push({
                    index: x,
                    display: 'Item ' + x
                });
            }

            res.send(response);
        });
    }
}