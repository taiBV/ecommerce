const express = require('express')
const router = express.Router()

router.use('/v1/shop', require('./v1/shop'))
module.exports = router
