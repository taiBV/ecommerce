const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    shop_id: String,
    product_id: String,
    product_qty: Number,
    booking_order: Array,
}, {
    collection: "InventoryModel",
    timestamps: true
});
module.exports = mongoose.model('InventoryModel', schema)
