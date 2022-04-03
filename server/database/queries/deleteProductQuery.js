const connection = require('../config/connection');

module.exports = (id) => connection.query('DELETE From products WHERE id=$1', [id]);
