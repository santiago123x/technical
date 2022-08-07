const keys = require('../keys/keys.js')
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: keys.pgURI,
    ssl: {
      rejectUnauthorized: false
    }
  });


pool.connect();

module.exports = pool;