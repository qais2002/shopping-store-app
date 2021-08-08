const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopping-store-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, () => console.log('connected to db'));