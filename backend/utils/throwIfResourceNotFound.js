const Custom404Error = require("../errors/Custom404Error");

const throwIfResourceNotFound = (resource, message) => {
    if (!resource) {
        throw new Custom404Error(message);
    }
};

module.exports = throwIfResourceNotFound;
