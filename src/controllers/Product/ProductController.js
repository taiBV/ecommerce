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
        const productService = new ProductService()
        const rs = await productService.create(req.body)
        return new APIESuccess("OK", 200, rs).send(res)
    }
}

module.exports = ProductController
