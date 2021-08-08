const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const productSchema = new Schema([{
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}]);

const Product = model('Product', productSchema);

module.exports = Product;