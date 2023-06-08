const Shop = require("../models/Shop")
const AuthHelper = require("../utils/AuthHelper");
const {APIError} = require("../core/handleError");
var bcrypt = require('bcryptjs');
var {isEmpty} = require('lodash');

class DiscountService {
    constructor() {
    }
}

module.exports = DiscountService
