var express = require('express');
var router = express.Router();
var store = require('../dal')(require('../../config/configs.json').db)
var responseHelper = require('../helpers/responseHelper')

router.post('/', (req, res) => {
    var endObj = {
        Arrows: req.body.arrows
    }
    store.repositories.ends.add(endObj, (err, created)=>{

    })
})

module.exports = router;