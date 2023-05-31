const Shop = require("../models/Shop")
const AuthHelper = require("../utils/AuthHelper");
const {APIError} = require("../core/handleError");
var bcrypt = require('bcryptjs');
var {isEmpty} = require('lodash');
const ProductRepository = require("../repositories/ProductRepository")
class ProductService {

    constructor() {

    }

    static create = async phone => {
        const proModel = new ProductRepository()
        return proModel.create("1",{name: "taibv"})
    }
}

module.exports = ShopService
