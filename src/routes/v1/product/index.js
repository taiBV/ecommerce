const express = require('express')
const router = express.Router()

const ProductController = require("../../../controllers/Product/ProductController");
const {ErrorHandler} = require("../../../core/handleError");
const Authenticate = require("../../../helpers/Authenticate")
const productController = new ProductController()

router.post('/create', [Authenticate], ErrorHandler(productController.createProduct))

module.exports = router
