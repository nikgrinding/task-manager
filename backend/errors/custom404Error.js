const customError = require("./customError");

class custom404Error extends customError {
    constructor(message) {
        super(404, message);
    }
}

module.exports = custom404Error;
