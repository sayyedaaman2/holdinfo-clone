const { pool: Client } = require("./index");
class Market {
  static async create(marketData) {
    try {
      const insertQuery = `
            INSERT INTO market_data
            (id,base_unit, quote_unit, low, high, last, type, open, volume, sell, buy, at , name)
            VALUES
            ($1,$2,$3,$4,$5,$6,$7,$8, $9, $10,$11, $12,$13)
            RETURNING id;
            `;

      const result = await Client.query(insertQuery, marketData);
      const insertedId = result.rows[0].id;

      await Client.query("COMMIT");

      console.log(`Data inserted successfully with ID : ${insertedId}`);

      return insertedId;

    } catch (err) {
      await Client.query("ROLLBACK");
      console.log(`Error inserting data : `, err);
    }
  }

  static async findById(id) {
    try {
      const findQuery = `
    SELECT * FROM market_data WHERE id= $1`;
      const result = await Client.query(findQuery, [id]);
      if (result.rows.length > 0) {
        const record = result.rows[0];
        console.log("Record found:", record);
        return record;
      }
      return null;
    } catch (err) {
      console.log(`Error while the finding the marketId : `, err);
    }
  }

  static async find() {

    try {

      const findQuery = `SELECT * FROM market_data;`
      const result = await Client.query(findQuery);
      if (result.rows.length > 0) {
        const record = result.rows;
        console.log("Record found:", record);
        return record;
      }
      return null;

    } catch (err) {
      console.log(`Error while the findding the marketId : `, err);
    }
  }
  static async update(id, newData) {

    try {


    } catch (err) {
      console.log(`Error while the updating the marketId : `, err);
    }
  }
  static async getCurrencyList() {
    try {

      const regionCurrencyQuery = `SELECT DISTINCT quote_unit FROM market_data;`;
      const cryptoCurrencyQuery = `SELECT DISTINCT base_unit FROM market_data`;

      const regionCurrencyList = await Client.query(regionCurrencyQuery);
      const cryptoCurrencyList = await Client.query(cryptoCurrencyQuery);

      if (regionCurrencyList.rowCount < 0 || cryptoCurrencyList.rowCount < 0) {
        return null;
      }

      const output = {
        region : regionCurrencyList.rows,
        crypto : cryptoCurrencyList.rows,
      }
      return output;

    } catch (err) {
      console.log(`Error while the fetching the currency : `, err);
    }
  }
  static async find() {

    try {

      const findQuery = `SELECT * FROM market_data;`
      const result = await Client.query(findQuery);
      if (result.rows.length > 0) {
        const record = result.rows;
        console.log("Record found:", record);
        return record;
      }
      return null;

    } catch (err) {
      console.log(`Error while the findding the marketId : `, err);
    }
  }

}

module.exports = Market;
