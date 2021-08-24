const express = require('express')
const copyFolder = require('../copyFiles');
const router = express.Router();


router.get('/',(req,res) => {
    res.send('get req')
})

router.post('/',(req,res) => {

    const { src_dir } = req.body
    const { des_dir } = req.body

    if(!src_dir)
    {
        return res.status(400).json({ success: false, msg: 'please provide source directory' })
    }

    if(!des_dir)
    {
        return res.status(400).json({ success: false, msg: 'please provide desteniton directory' })
    }
    copyFolder(src_dir,des_dir);
    res.status(201).json({ success: true, src_dir: src_dir })
})

module.exports = router
