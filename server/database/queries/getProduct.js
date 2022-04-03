const connection = require('../config/connection');

module.exports = (id) => connection.query(
  'SELECT * FROM products WHERE id = $1',
  [id],
);
