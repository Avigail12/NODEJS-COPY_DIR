const { createLogger, format, transports } = require('winston');
require('dotenv').config() 


module.exports = createLogger({
    // levels: winston.config.syslog.levels,
    // colors: winston.config.syslog.colors,
    level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
transports:
    new transports.File({
    filename: 'logs/server.log',
    // level: "debug",
    format: format.combine(
        format.colorize(),
        format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
        format.align(),
        format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    )}),
});


// module.exports = createLogger({
// transports:
//     new transports.File({
//     filename: 'logs/server.log',
//     format:format.combine(
//         format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
//         format.align(),
//         format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
//     )}),
// });


// console.log(`${info.level}: ${[info.timestamp]}: ${info.message}`);
