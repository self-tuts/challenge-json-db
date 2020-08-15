const winston = require('winston')
const config = require('../../config.js')
const logger = winston.createLogger({
  level: config.LOG_LEVEL,
  transports: [
    new winston.transports.Console()
  ]
})
module.exports = logger
