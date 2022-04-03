const Router = require('express').Router();

const { editProduct, deleteProduct } = require('./controllers');

Router.route('/product/:id').patch(editProduct);
Router.delete('/product/:id', deleteProduct);

module.exports = Router;
