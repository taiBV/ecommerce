const express = require('express')
const router = express.Router()

require("../../../controllers/Shop/ShopController")

const ShopController = require("../../../controllers/Shop/ShopController");

const shopController = new ShopController()

router.get('/signUp', shopController.signUp)

module.exports = router
