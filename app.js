const { readFile, writeFile } = require('fs').promises
// const fse = require('fs-extra');
require('dotenv').config() 


var ncp = require('ncp').ncp;
 
ncp.limit = 16;
 
ncp(process.env.FOLDER_SRC, process.env.FOLDER_DES, function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
});


// fse.copySync(process.env.FOLDER_SRC, process.env.FOLDER_DES, function (err) {
//     if (err) {                
//       console.error(err);      
//     } else {
//       console.log("success!");
//     }
//   });
