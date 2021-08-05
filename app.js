// const { readFile, writeFile } = require('fs')
const fs = require('fs')
const path = require('path');
require('dotenv').config() 
const copyFolder = require('./copyFiles');
const winston = require('winston');

const src_dir = process.env.FOLDER_SRC
const des_dir = process.env.FOLDER_DES



copyFolder(src_dir,des_dir)

// const logger = winston.createLogger({
//     level: 'info',
//     format: winston.format.json(),
//     defaultMeta: { service: 'user-service' },
//     transports: [
//       //
//       // - Write all logs with level `error` and below to `error.log`
//       // - Write all logs with level `info` and below to `combined.log`
//       //
//       new winston.transports.File({ filename: 'error.log', level: 'error' }),
//       new winston.transports.File({ filename: 'combined.log' }),
//     ],
//   });

//   if (process.env.NODE_ENV !== 'production') {
//     logger.add(new winston.transports.Console({
//       format: winston.format.simple(),
//     }));
//   }

//   console.log(`${info.level}: ${info.message} JSON.stringify({ ...rest }) `);