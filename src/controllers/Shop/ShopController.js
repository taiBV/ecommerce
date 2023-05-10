const ShopService = require("../../services/ShopService")

class ShopController {
    constructor() {
        console.log('constructor ShopController')
    }

    async signUp(req, res, next) {

        const storeShop = await ShopService.signUp(req.body);

        return res.json({
            code: 1,
            data: storeShop,
            msg: 'signUp 22'
        });
    }
}

module.exports = ShopController
