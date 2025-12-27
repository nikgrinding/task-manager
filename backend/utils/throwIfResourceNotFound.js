const custom404Error = require("../errors/custom404Error");

const throwIfResourceNotFound = (resource, message) => {
    if (!resource) {
        throw new custom404Error(message);
    }
};

module.exports = throwIfResourceNotFound;
