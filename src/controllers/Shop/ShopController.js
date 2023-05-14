const ShopService = require("../../services/ShopService")
const AuthHelper = require("../../utils/AuthHelper")

class ShopController {
    constructor() {
        console.log('constructor ShopController')
        // this.auth
    }

    async signUp(req, res, next) {

        let obj = {}
        const storeShop = await ShopService.signUp(req.body);

        if (!storeShop) {
            return res.json({
                code: 0,
                data: {},
                msg: 'error'
            });
        }
        obj.data = storeShop
        obj.token = AuthHelper.genToken(storeShop);

        return res.json({
            code: 1,
            data: obj,
            msg: 'success'
        });
    }
}

module.exports = ShopController
