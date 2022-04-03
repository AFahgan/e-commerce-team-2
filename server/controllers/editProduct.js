const editProductQuery = require('../database/queries');

module.exports = (req, res, next) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  editProductQuery({
    id,
    name,
    description,
    price,
  })
    .then(() => res.json({ status: 200, msg: 'product edited successfully' }))

    .catch((err) => next(err));
};
