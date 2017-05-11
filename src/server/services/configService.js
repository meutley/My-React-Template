"use strict";

module.exports = {
    getConfig: function () {
        let environment = process.env.NODE_ENV || 'debug';
        let config = require('../config').getConfig(environment);
        
        return config;
    }
}