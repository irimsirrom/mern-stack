const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
 product_name : String,
 category: String,
 img_src: String,
 price: Number
});

const Product = module.exports = mongoose.model('Product', ProductSchema);
