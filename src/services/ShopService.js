const Shop = require("../models/Shop")
const AuthHelper = require("../utils/AuthHelper");
const {APIError} = require("../core/handleError");
var bcrypt = require('bcryptjs');
var {isEmpty} = require('lodash');

class ShopService {
    constructor() {
    }

    static findByPhone = async phone => {
        return Shop.findOne({phone});
    }

    static login = async ({phone, password}) => {

        // check phoneâ
        const shop = await ShopService.findByPhone(phone)

        if (isEmpty(shop)) throw new APIError("Shop not register !")


        const checkPass = bcrypt.compareSync(password, shop.password); // true

        if (!checkPass) throw new APIError("Thông tin đăng nhập không đúng")

        // gen new token
        const tokenGenerate = AuthHelper.genToken(shop)

        let objData = new Map()

        objData.set("info", shop)
        objData.set("auth", tokenGenerate)

        return Object.fromEntries(objData)
    }
    static signUp = async (params) => {
        // create new Shop
        let obj = {}
        var salt = bcrypt.genSaltSync(10);
        params.password = bcrypt.hashSync(params.password, salt);

        let shop = await Shop.findOne({phone: params.phone})
        if (shop) {
            throw new APIError("shop is exist", 500)
        }
        const storeShop = await Shop(params).save();

        obj.data = storeShop
        obj.token = AuthHelper.genToken(storeShop);

        return obj
    }
}

module.exports = ShopService
