
const Shop = require("../models/Shop")
const AuthHelper = require("../utils/AuthHelper");
const {APIError} = require("../core/handleError");

class ShopService {
    constructor() {

    }

    static signUp = async (params) => {
        // create new Shop
        let obj = {}
        const storeShop = await new Shop(params).save();
        if (storeShop) {
            throw new APIError("OK", 200)
        }
        obj.data = storeShop
        obj.token = AuthHelper.genToken(storeShop);

        return {
            code: 1,
            data: obj,
            msg: 'success'
        }
    }
}

module.exports = ShopService
