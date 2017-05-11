"use strict";

module.exports = {
    getConnection: function (name) {
        let config = require('../../services/configService').getConfig();
        let dbConfig = config.database;
        
        let results = dbConfig.connections.filter((conn) => {
            return conn.name === name;
        });
        
        let result = (results && results.length > 0) ? results[0] : {};
        return result.details;
    }
}