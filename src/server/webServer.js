"use strict";

let middleware = require('./middleware');
let staticContentService = middleware.staticContentService;

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');

let config = require('./services/configService').getConfig();

let api = require('./api');

module.exports = {
    init: function () {
        // Middleware
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        
        let rootPath = path.join(__dirname, '../');
        staticContentService.init(app, rootPath, config.web.content.static);
         
        // Default route (app root)
        app.get('/', function (req, res) {
            res.sendFile(path.join(__dirname, '../client/app/index.html'));
        });
        
        // Initialize the API
        api.init(app);
        
        // Start the web server
        const port = config.web.port;
        app.listen(port, function () {
            console.log('server listening on port ' + port);
        });
    }
}