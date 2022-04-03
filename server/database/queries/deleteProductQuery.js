const connection = require('../config/connection');

const deleteProductQuery = (id) => connection.query('DELETE From products WHERE id=$1', [id]);

module.exports = deleteProductQuery;
