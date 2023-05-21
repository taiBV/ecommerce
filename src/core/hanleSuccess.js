const ShopService = require("../../services/ShopService");
const HttpStatusCode = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500,
}

//free to extend the BaseError
class APIESuccess extends Error {
    constructor(message, statusCode = HttpStatusCode.INTERNAL_SERVER, data = "") {
        super(message);
        this.statusCode = statusCode
        this.data = data
    }
    send(req, res, next){
        return res.status(201).json(this)
    }
}


module.exports = {APIESuccess}
