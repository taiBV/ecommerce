const {isEmpty} = require("lodash");
const {APIError} = require("../core/Response");
const AuthHelper = require("../utils/AuthHelper")
module.exports = (req, res, next) => {
    if (isEmpty(req.headers.access_token)) {
        return new APIError("Token empty !", 401)
    }
    // varify
    const tokenInfo = AuthHelper.verifyToken(req.headers.access_token)
    req.shop  = tokenInfo.info
    next();
}
