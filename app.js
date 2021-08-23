// const { readFile, writeFile } = require('fs')
const fs = require('fs')
const path = require('path');
require('dotenv').config() 
const copyFolder = require('./copyFiles');

const src_dir = process.env.FOLDER_SRC
const des_dir = process.env.FOLDER_DES



copyFolder(src_dir,des_dir)

