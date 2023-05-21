const ShopService = require("../../services/ShopService")
const AuthHelper = require("../../utils/AuthHelper")
require("../../core/handleError")
const {APIError, APIESuccess} = require("../../core/Response");
class ShopController {
    constructor() {
        //console.log('constructor ShopController')
        // this.auth
    }
    async login(req, res, next) {
        const data = await ShopService.login(req.body)
        return new APIESuccess("OK", 200, data).send(res)
    }
    async signUp(req, res, next) {
        const rs = await ShopService.signUp(req.body)
        return new APIESuccess("OK", 200, rs).send(res)
    }
}

module.exports = ShopController
