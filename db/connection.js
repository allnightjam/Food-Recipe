const { Pool } = require('pg');

const dbParams = {
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'foodrecipes'
};

const db = new Pool(dbParams);

db.connect();

module.exports = db;