const Router = require('express').Router();

const editProduct = require('./controllers/editProduct');

Router.route('/product/:id').patch(editProduct);

module.exports = Router;
