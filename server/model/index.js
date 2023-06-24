const { Pool } = require("pg");

const dbConfig = require("../config/db.config");

const env = process.env.NODE_ENV || "development";

const config = dbConfig[env];
console.log(`process enviroment : ${env}`);

const pool = new Pool(config);

function init() {
  const marketTable = `CREATE TABLE IF NOT EXISTS market_data (
        id VARCHAR(10) PRIMARY KEY,
        base_unit VARCHAR(10) NOT NULL,
        quote_unit VARCHAR(10) NOT NULL,
        low DECIMAL(20, 2) NOT NULL,
        high DECIMAL(20, 2) NOT NULL,
        last DECIMAL(20, 2) NOT NULL,
        type VARCHAR(10) NOT NULL,
        open DECIMAL(20, 2) NOT NULL,
        volume DECIMAL(20, 2) NOT NULL,
        sell DECIMAL(20, 2) NOT NULL,
        buy DECIMAL(20, 2) NOT NULL,
        at BIGINT NOT NULL,
        name VARCHAR(50) NOT NULL
    );`;

  pool.query(marketTable, (err, res) => {
    if (err) {
      console.log(`Error creating table : `, err);
    } else {
      console.log(`Market Table created successfully`);
    }
  });
}

module.exports = {pool, init};
