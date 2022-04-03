const { getAllProducts } = require('../database/queries');

module.exports = (req, res, next) => {
  getAllProducts()
    .then(({ rows }) => res.json(rows))
    .catch((err) => next(err));
};
