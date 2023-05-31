const express = require('express')
const router = express.Router()

router.use('/v1/shop', require('./v1/shop'))
router.use('/v1/product', require('./v1/product'))
module.exports = router
