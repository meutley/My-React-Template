module.exports = {
    build: function () {
        var outerArguments = arguments;
        
        return {
            getById: function (item) {
                var givenId = outerArguments[0];
                return item.id == givenId;
            }
        };
    }
}