"use strict";

let base = require('./config');
let config = base;

/* ==================================================
    Override base configuration here. For example:
    
    config.web.port = 8000;
   ================================================== */
   
config.environment = 'development';
   
module.exports = config;