var ResponseUtility = {
    send: function (response) {
        if (arguments.length === 2) {    // Just send data
            response.send(arguments[1]);
        } else if (arguments.length === 3) {    // Send data with a status code
            var status = arguments[1];
            var data = arguments[2];
            
            response.status(status).send(data);
        }
    }
}

module.exports = ResponseUtility;