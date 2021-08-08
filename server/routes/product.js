const express = require('express');
const router = new express.Router();

const Product = require('../models/product');
// const Category = require('../models/productCategory');

router.get('/products/all', async (req, res) => {
    try {
        const footwears = await Product.find({ category: 'Footwears' });
        const shirts = await Product.find({ category: 'Shirts' });
        const jackets = await Product.find({ category: 'Jackets' });
        const hoodies = await Product.find({ category: 'Hoodies' });
        const watches = await Product.find({ category: 'Watches' });

        const allProducts = await Product.find({});

        const products = {
            Footwears: footwears,
            Shirts: shirts,
            Jackets: jackets,
            Hoodies: hoodies,
            Watches: watches
        }

        const categories =  Object.keys(products);

        res.send({
            allProducts: allProducts,
            products: products,
            categories: categories
        });
    } catch (err) {
        res.status(500).send();
    }
});

router.get('/products/footwears', async (req, res) => {
    try {
        const footwears = await Product.find({ category: 'Footwears' });
        res.send(footwears);
    } catch (err) {
        res.status(500).send();
    }
});

router.get('/products/shirts', async (req, res) => {
    try {
        const shirts = await Product.find({ category: 'Shirts' })
        res.send(shirts);
    } catch (err) {
        res.status(500).send();
    }
});

router.get('/products/jackets', async (req, res) => {
    try {
        const jackets = await Product.find({ category: 'Jackets' });
        res.send(jackets);
    } catch (err) {
        res.status(500).send();
    }
});

router.get('/products/hoodies', async (req, res) => {
    try {
        const hoodies = await Product.find({ category: 'Hoodies' });
        res.send(hoodies);
    } catch (err) {
        res.status(500).send()
    }
});

router.get('/products/watches', async (req, res) => {
    try {
        const watches = await Product.find({ category: 'Watches' });
        res.send(watches);
    } catch (err) {
        res.status(500).send();
    }
});

router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById({ _id: req.params.id });
        res.send(product);
    } catch (err) {
        res.status(500).send();
    }
});

router.get('/products/:name', async (req, res) => {
    try {
        const product = await Product.find({ name: req.params.name })

        if (!product) {
            return res.status(404).send();
        }

        res.send(product);
    } catch (err) {
        res.status(500).send();
    }
})


module.exports = router;