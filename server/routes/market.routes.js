const express = require('express');
const Router = express.Router();
const marketController = require('../controller/market.controller')
const marketValidator = require('../middleware');

Router.get('/', marketController.find);


Router.get('/currency/:id',marketValidator.isValidId, marketController.findById)


Router.get('/currencylist', marketController.currencyList)


module.exports = Router;