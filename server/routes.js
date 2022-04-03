const Router = require('express').Router();

const { editProduct, deleteProduct, addProduct } = require('./controllers');

Router.route('/product').post(addProduct);

Router.route('/product/:id').patch(editProduct).delete(deleteProduct);

module.exports = Router;
