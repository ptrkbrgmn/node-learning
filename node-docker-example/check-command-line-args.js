'use strict'

var argv = require('yargs')
  .usage('Usage: $0 services [service1:service2:service3]')
  .demandOption(['services'])
  .default('services', 'elasticsearch:redis:cassandra:rabbitmq')
  .argv

module.exports = argv
