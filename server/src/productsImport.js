require('./database/mongoose');
const categories = require('../productsCollection/categories');
const footwearProducts = require('../productsCollection/footwaers');
const shirtProducts = require('../productsCollection/shirts');
const jacketsProducts = require('../productsCollection/jackets');
const hoodeies = require('../productsCollection/hoodies');
const watches = require('../productsCollection/watches');

const Product = require('../models/product');

const importProducts = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(footwearProducts);
        await Product.insertMany(shirtProducts);
        await Product.insertMany(jacketsProducts);
        await Product.insertMany(hoodeies);
        await Product.insertMany(watches);

        console.log('products import completed!');
    } catch (err) {
        console.log('products import failed', err);
    }
};

importProducts();