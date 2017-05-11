"use strict";

var express = require('express');
var path = require('path');

module.exports = {
    init: function (app, rootPath, staticContent) {
        if (app && staticContent) {
            for (let x = 0; x < staticContent.length; x++) {
                let mountPath = staticContent[x].mountPath;
                let physicalPath = staticContent[x].physicalPath;
                let fullPath = path.join(rootPath, physicalPath);
                
                app.use(mountPath, express.static(fullPath));
            }
        }
    }
}