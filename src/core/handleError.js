const HttpStatusCode = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500,
}

// class BaseError extends Error {
//
//     constructor(name, httpCode, description, isOperational) {
//         super(description);
//         Object.setPrototypeOf(this, new.target.prototype);
//
//         this.name = name;
//         this.httpCode = httpCode;
//         this.isOperational = isOperational;
//
//         // Error.captureStackTrace(this);
//     }
// }

//free to extend the BaseError
class APIError extends Error {
    constructor(message, status = HttpStatusCode.INTERNAL_SERVER) {
        super(message);
        this.status = status
    }
}

const ErrorHandler = fn => {
    console.log('ErrorHandler', fn)
    return (req, res, next) => {
        fn(req, res, next).catch(next)
    }
}

module.exports = {APIError,ErrorHandler}
