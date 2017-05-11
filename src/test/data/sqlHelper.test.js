"use strict";

let chai = require('chai');
let assert = chai.assert;

describe('sqlHelper', function () {
    beforeEach(function () {
        this.request = {
            inputParameters: [],
            input: function () {
                let args = arguments;
                
                let name = args[0];
                let type = '';
                let value = '';
                if (arguments.length === 2) {
                    value = args[1];
                }
                if (arguments.length === 3) {
                    type = args[1];
                    value = args[2];
                }
                
                this.inputParameters.push({ name: name, type: type, value: value });
            }
        }
        
        this.sqlHelper = require('../../server/data/helpers/sqlHelper');
    });
    
    it('mapStoredProcedureParameters should map name and value', function () {
        let input = [
            { name: 'param1', value: 'value1' },
            { name: 'param2', value: 'value2' }
        ];
        
        this.sqlHelper.mapStoredProcedureParameters(this.request, input);
        
        let params = this.request.inputParameters;
        assert.equal(2, params.length);
        assert.equal('param1', params[0].name);
        assert.equal('value1', params[0].value);
        assert.equal('param2', params[1].name);
        assert.equal('value2', params[1].value);
    });
    
    it('mapStoredProcedureParameters should map name, type and value', function () {
        let input = [
            { name: 'param1', type: 'type1', value: 'value1' },
            { name: 'param2', type: 'type2', value: 'value2' }
        ];
        
        this.sqlHelper.mapStoredProcedureParameters(this.request, input);
        
        let params = this.request.inputParameters;
        assert.equal(2, params.length);
        assert.equal('param1', params[0].name);
        assert.equal('value1', params[0].value);
        assert.equal('type1', params[0].type);
        assert.equal('param2', params[1].name);
        assert.equal('value2', params[1].value);
        assert.equal('type2', params[1].type);
    });
});