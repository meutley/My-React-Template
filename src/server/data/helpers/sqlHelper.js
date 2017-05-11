"use strict";

module.exports = {
    mapStoredProcedureParameters: function (request, parameters) {
        if (request && parameters && parameters.length > 0) {
            parameters.map((param) => {
                if (param.type) {    // Include parameter type
                    request.input(param.name, param.type, param.value);
                } else {    // Let mssql determine the parameter type
                    request.input(param.name, param.value);
                }
            });
        }
    }
}