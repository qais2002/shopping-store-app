// Importing the modules
const express = require('express');
const app = express();
require('./database/mongoose');

const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000'
}));

const port = process.env.PORT || 5000;

// Importing Route Modules
const userRouter = require('../routes/user');
const productRouter = require('../routes/product');
const cartRouter = require('../routes/cart');

// Parsing the body before sending Requests
app.use(express.json());

// Routes
app.use(userRouter);
app.use(productRouter);
app.use(cartRouter);


app.listen(port, () => console.log(`Listening on port: ${port}`));