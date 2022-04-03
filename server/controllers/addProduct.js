const { addProductQuery } = require('../database/queries');
const customizedError = require('../utils/customizedError');

module.exports = (req, res, next) => {
  addProductQuery(req.body)
    .then(({ rowCount }) => {
      if (rowCount) {
        res.json({ status: 200, msg: 'product added successfully' });
      } else throw customizedError('product added fail', 400);
    })
    .catch((err) => next(err));
};
