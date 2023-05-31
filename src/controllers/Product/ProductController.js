const ShopService = require("../../services/ShopService")
require("../../core/handleError")
const {APIError, APIESuccess} = require("../../core/Response");
require("../../services/ProductService");
const ProductService = require("../../services/ProductService");
class ProductController {
    constructor() {
        //console.log('constructor ShopController')

    }

    async createProduct(req, res) {
        console.log('req.body', req.body)
        // const productService = new ProductService()
        // const rs = productService.create(req.body)
        return new APIESuccess("OK", 200, 1).send(res)
    }
}

module.exports = ProductController
