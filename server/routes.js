const Router = require('express').Router();

const editProduct = require('./controllers/editProduct');
const addProduct = require('./controllers/addProduct');

Router.route('/product').post(addProduct);

Router.route('/product/:id').patch(editProduct);

module.exports = Router;
