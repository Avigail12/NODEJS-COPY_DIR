const fs = require('fs')
const path = require('path');

function copyFolder(source, target) {
    var files = [];

    // Check if need create folder
    if ( !fs.existsSync(target)) {
        fs.mkdirSync(target);
    }

    // Copy
    if ( fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach( function (file) {
            var curSource = path.resolve(source, file);
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolderRecursiveSync( curSource, target);
            } else {
                copyFile(curSource, target);
            }
        } );
    }
}

function copyFile( source, target ) {

    var targetFile = target;

    // If target is a directory, a new file with the same name will be created
    if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
            targetFile = path.resolve(target, path.basename(source));
            console.log(targetFile);
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

module.exports = copyFolder