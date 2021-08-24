const fs = require('fs')
// const path = require('path');
const express = require('express');
require('dotenv').config() 
const copy = require('./routes/copy')
// const copyFolder = require('./copyFiles');

// const src_dir = process.env.FOLDER_SRC
// const des_dir = process.env.FOLDER_DES

const PORT = process.env.PORT || 8080

const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/copy', copy)


app.listen(PORT,(req,res) => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

// copyFolder(src_dir,des_dir)
// FOLDER_SRC=C:\Users\avigailc\Desktop\node-express-course\c\public
// FOLDER_DES=C:\Users\avigailc\Desktop\uniface help