"use strict";

let chai = require('chai');
let assert = chai.assert;

describe('configHelper', function () {
    beforeEach(function () {
        this.configHelper = require('../../server/data/helpers/configHelper');
    });
    
    it('getConnection should return AppDb connection', function () {
        let config = this.configHelper.getConnection('AppDb');
        
        assert.isTrue(config.server === 'ServerName');
        assert.equal('DbName', config.database);
    });
});