const mongoose = require('mongoose');
const {Types, Schema} = require("mongoose");
const schema = new mongoose.Schema({
    product_name: String,
    product_thumb: String,
    product_description: String,
    product_quantity: Number,
    product_price: Number,
    shop_id: Number,
    product_attributes: {type: Schema.Types.Mixed},
}, {
    collection: "ProductModel",
    timestamps: true
});
const schemaElectronic = new mongoose.Schema({
    brand: String,
}, {
    collection: "ProductElectronic",
    timestamps: true
});
const schemaClothing = new mongoose.Schema({
    brand: String,
    size: String,
}, {
    collection: "ProductClothing",
    timestamps: true
});
// module.exports = mongoose.model('ProductModel', schema);
// module.exports = mongoose.model('ProductElectronic', schemaClothing);
// module.exports = mongoose.model('ProductClothing', schemaElectronic);
module.exports = {
    ProductModel: mongoose.model('ProductModel', schema),
    ProductElectronic: mongoose.model('ProductElectronic', schemaClothing),
    ProductClothing: mongoose.model('ProductClothing', schemaElectronic),
}
