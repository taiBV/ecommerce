const ShopService = require("../../services/ShopService")
require("../../core/handleError")
const {APIError, APIESuccess} = require("../../core/Response");
const ProductService = require("../../services/ProductService");
class ProductController {
    constructor() {
        //console.log('constructor ShopController')

    }

    async createProduct(req, res, next) {
        const productService = new ProductService()
        const rs = productService.create(req.body)
        return new APIESuccess("OK", 200, rs).send(res)
    }
}

module.exports = ProductController
