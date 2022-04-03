const connction = require('../config/connection');

module.exports = ({
  name, description, image, category, price,
}) => connction.query('INSERT INTO products (name ,description,image, category , price) VALUES ($1,$2,$3,$4,$5)', [name, description, image, category, price]);
