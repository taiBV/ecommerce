const HttpStatusCode = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500,
}

//free to extend the BaseError
class APIError extends Error {
    constructor(message, statusCode = HttpStatusCode.INTERNAL_SERVER, data = "") {
        super(message);
        this.statusCode = statusCode
        this.data = data
    }
}

const ErrorHandler = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next)
    }
}

module.exports = {APIError, ErrorHandler}
