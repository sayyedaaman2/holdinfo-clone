const rawData = require("../rawdata.json");
const marketData = require("../model/market.model");

const bulkSave = () => {
  try{

    for (item in rawData) {
      const inputData = [item, ...Object.values(rawData[item])];
      marketData.create(inputData);
    }
    console.log(`Successfully initialized`)
  } catch(err){
    console.log(`Some Error while initialization data`)
  }
};

module.exports = bulkSave;
