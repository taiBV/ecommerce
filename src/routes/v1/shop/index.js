const express = require('express')
const router = express.Router()

require("../../../controllers/Shop/ShopController")

const ShopController = require("../../../controllers/Shop/ShopController");
const {ErrorHandler} = require("../../../core/handleError");
const Authenticate = require("../../../helpers/Authenticate")
const shopController = new ShopController()

router.post('/login', ErrorHandler(shopController.login))
router.post('/signUp', ErrorHandler(shopController.signUp))
router.post('/verifyToken', [Authenticate], ErrorHandler(shopController.verifyToken))

module.exports = router
