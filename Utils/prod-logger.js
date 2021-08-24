const { format, createLogger, transports } = require('winston');
const { timestamp, combine, errors, json } = format;

function buildProdLogger() {
  return createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: { service: 'user-service' },
    transports: [    new transports.File({
        filename: 'logs/server.log',
        // level: "debug",
        format: format.combine(
            format.colorize(),
            format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
            format.align(),
            format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
        )}),
    ],
  });
}

module.exports = buildProdLogger;