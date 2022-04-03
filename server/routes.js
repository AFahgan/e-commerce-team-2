const Router = require('express').Router();

const {
  editProduct, deleteProduct, addProduct, getProduct, getAllProducts,
} = require('./controllers');

Router.route('/product').post(addProduct).get(getAllProducts);

Router.route('/product/:id').patch(editProduct).delete(deleteProduct).get(getProduct);

module.exports = Router;
