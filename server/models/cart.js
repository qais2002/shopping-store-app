const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const cartSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    products: [
        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number
            }
        }
    ]
});

const Cart = model('Cart', cartSchema);

module.exports = Cart;