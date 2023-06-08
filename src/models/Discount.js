const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    shop_id: String,
    name: String,
    title: String,
    value: Number,
    start_date: String,
    end_date: String,
    code: String,
    qty: Number, // số lượng
    is_active: String,
    users_used: Array, // user nào đã sử dụng
});
module.exports = mongoose.model('Discount', schema);
