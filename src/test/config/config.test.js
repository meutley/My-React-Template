"use strict";

let chai = require('chai');
let assert = chai.assert;

describe('config', function () {
    beforeEach(function () {
        this.config = require('../../server/config');
    });
    
    it('should return configuration for the correct environment', function () {
        let testEnvironment = 'development';
        let cfg = this.config.getConfig(testEnvironment);
        
        assert.equal(testEnvironment, cfg.environment);
    });
    
    it('should throw an error when no configuration available for given environment', function () {
        let testEnvironment = 'fake';
        let err = null;
        try {
            let cfg = this.config.getConfig(testEnvironment);
        } catch (e) {
            err = e;
        }
        
        assert.isTrue(err != null);
    });
});