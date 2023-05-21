const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    phone: String,
    name: String,
    password: String
});
module.exports = mongoose.model('ShopModel', schema);
