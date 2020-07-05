// const Product = require('../models/product.model');
import Product from '../models/product.model';

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};



exports.get_product = async function (req, res, next) {

    let product
    try {
        product = await Product.findOne({ name: "desk" }).exec()
        res.status(200).json(product)

    } catch (error) {
        console.err(error)
    }
}
exports.product_create = async function (req, res, next) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );
    try {
        let data = await product.save()
        res.send('Product Created successfully')
        
    } catch (error) {
        res.json(error)
    }
};