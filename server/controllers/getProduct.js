const { getProduct } = require('../database/queries');

module.exports = (req, res, next) => {
  const { id } = req.params;

  getProduct(id)
    .then(({ rows }) => {
      res.json(rows);
    })

    .catch((err) => next(err));
};
