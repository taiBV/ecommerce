
const InventoryModel = require("../models/Inventory")
const {APIError} = require("../core/Response");

class InventRepository {
    constructor() {

    }

    create(params) {
        return InventoryModel.create(params)
    }
}


module.exports = InventRepository
