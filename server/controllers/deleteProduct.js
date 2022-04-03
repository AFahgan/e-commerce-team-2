const { deleteProductQuery } = require('../database/queries');

const deleteProduct = (request, response, next) => {
  const { id } = request.params;
  deleteProductQuery(id)
    .then(() => response.json({ status: 200, message: 'Deleted Product successfully!' }))
    .catch((err) => next(err));
};

module.exports = deleteProduct;
