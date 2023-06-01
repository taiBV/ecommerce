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
        const params = {
            ...req.body,
            shop_id: req.shop._id
        }
        const rs = await productService.create(params)
        return new APIESuccess("OK", 200, rs).send(res)
    }
}

module.exports = ProductController
