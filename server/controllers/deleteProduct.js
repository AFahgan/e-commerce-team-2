const { deleteProductQuery } = require('../database/queries');

module.exports = (request, response, next) => {
  const { id } = request.params;
  deleteProductQuery(id)
    .then(() => response.json({ status: 200, message: 'Deleted Product successfully!' }))
    .catch((err) => next(err));
};
