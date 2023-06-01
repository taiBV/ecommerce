const Shop = require("../models/Shop")
const AuthHelper = require("../utils/AuthHelper");
const {APIError} = require("../core/handleError");
var bcrypt = require('bcryptjs');
var {isEmpty} = require('lodash');
const ProductRepository = require("../repositories/ProductRepository")
class ProductService {

    constructor() {

    }

    create(params){
        const proModel = new ProductRepository()
        return proModel.create("CLOTHING", params)
    }
}

module.exports = ProductService
