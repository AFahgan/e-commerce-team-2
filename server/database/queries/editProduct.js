const connection = require('../config/connection');

module.exports = ({
  name, id, description, price,
}) => connection.query(
  'update products set name = $2, description = $3, price = $4 where id = $1',
  [id, name, description, price],
);
