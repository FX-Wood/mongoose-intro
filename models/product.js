const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    orders:[{ type: Schema.Types.ObjectId, ref: 'Order' }]
});

module.exports = mongoose.model('Product', productSchema);