const knex = require('knex');

const knexConfig = require('./data/knexConfig');

module.exports = knex(knexConfig.development)