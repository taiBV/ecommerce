
const Shop = require("../models/Shop")

class ShopService {
    constructor() {

    }

    static signUp = async (params) => {
        // create new Shop
        return await new Shop(params).save();
    }
}

module.exports = ShopService
