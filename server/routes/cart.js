const express = require('express');
const router = new express.Router();
const auth = require('../middleware/authentication');

const Cart = require('../models/cart');
const Product = require('../models/product');

router.post('/cart', auth, async (req, res) => {
    const { name, quantity } = req.body;

    try {
        const product = await Product.findOne({ name: name });

        const cart = await Cart.findOne({ userId: req.user._id });

        if (cart) {
            const productIndex = cart.products.findIndex((prod) => prod.name === product.name);
            console.log(productIndex);

            if (productIndex > -1) {
                let selectedProduct = cart.products[productIndex];
                selectedProduct.quantity = quantity;
                cart.products[productIndex] = selectedProduct;
            } else {
                cart.products.push({ _id: product._id, name: product.name, quantity, price: product.price });
            }
        } else {
            const newCart = await Cart.create({
            userId: req.user._id,
            products: [{ _id: product._id, name: product.name, quantity, price: product.price }]
            })
            await newCart.save();
            return res.status(201).send(newCart);
        }
        
        await cart.save();
        return res.status(201).send(cart);
    } catch (err) {
        res.status(500).send();
    }
});

module.exports = router;