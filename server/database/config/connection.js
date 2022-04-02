const { Pool } = require('pg');
require('dotenv').config();

const {
  NODE_ENV, DEV_DB_URL, TEST_DB_URL, PROD_DB_URL,
} = process.env;

let dbUrl = PROD_DB_URL;
let ssl = false;

if (NODE_ENV === 'dev') dbUrl = DEV_DB_URL;
if (NODE_ENV === 'test') dbUrl = TEST_DB_URL;

if (NODE_ENV === 'prod') ssl = { rejectUnauthorized: false };

module.exports = new Pool({
  connectionString: dbUrl,
  ssl,
});
