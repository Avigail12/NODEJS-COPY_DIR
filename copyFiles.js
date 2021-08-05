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
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolder( curSource, target);
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
                console.log(target);
            }
        }
        fs.writeFileSync(target, fs.readFileSync(source));
        
    } catch (error) {
        console.log(err);
    }
}

module.exports = copyFolder