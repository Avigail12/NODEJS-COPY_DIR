const fs = require('fs')
const path = require('path');

function copyFolder(source, target) {
    var files = [];

    try {
           // Check if need create a folder
        if (!fs.existsSync(target)) {
            fs.mkdirSync(target);
        }
        // Copy
        if ( fs.lstatSync(source).isDirectory()) {
            files = fs.readdirSync(source);
            files.forEach( function (file) {
            var curSource = path.resolve(source, file);
            // console.log(curSource);
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolder( curSource, path.resolve(target, file));
            } else {
                copyFile(curSource, target);
            }
            });
        }   
    } catch (error) {
        console.log(err);
    }
 
}

function copyFile( source, target ) {

    try {
        // create a new file with the same name
        if (fs.existsSync(target)) {
            if (fs.lstatSync(target).isDirectory()) {
                target = path.resolve(target, path.basename(source));
            }
        }
        fs.writeFileSync(target, fs.readFileSync(source));
        
    } catch (error) {
        console.log(err);
    }
}

module.exports = copyFolder
