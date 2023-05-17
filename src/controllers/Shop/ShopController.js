const ShopService = require("../../services/ShopService")
const AuthHelper = require("../../utils/AuthHelper")
require("../../core/handleError")
const {APIError} = require("../../core/handleError");
class ShopController {
    constructor() {
        console.log('constructor ShopController')
        // this.auth
    }

    async signUp(req, res, next) {

        return res.status(201).json(await ShopService.signUp(req.body))
    }
}

module.exports = ShopController
