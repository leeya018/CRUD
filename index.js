import express from 'express'
import bodyParser from 'body-parser'



import product from './routes/product.route'; // Imports routes for the products
import item from './routes/item.route'

const app = express();

// Set up mongoose connection
import mongoose from 'mongoose';
mongoose.set('useFindAndModify', false);
let mongoDB = 'mongodb://localhost:27017/store';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);
app.use('/items',item)

// app.use('/data', data);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});



