const CustomError = require("./CustomError");

class Custom404Error extends CustomError {
    constructor(message) {
        super(404, message);
    }
}

module.exports = Custom404Error;
