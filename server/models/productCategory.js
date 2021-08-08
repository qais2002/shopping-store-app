const mongoose = require('mongoose');

const { Schema, model } = mongoose;


const productCategory = new Schema({
    category: {
        type: String,
        required: true
    },
    productsCount: {
        type: Number,
        required: true
    }
});

const Category = model('category', productCategory);

module.exports = Category;