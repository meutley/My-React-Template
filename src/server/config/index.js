"use strict";

module.exports = {
    getConfig: function (environment) {
        return require('./config.' + environment);
    }
}