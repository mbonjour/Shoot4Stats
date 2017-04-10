var express = require('express');
var router = express.Router();
var store = require('../dal')(require('../../config/configs.json').db)
var responseHelper = require('../helpers/responseHelper')
var middlewares = require('../middlewares')()

router.get('/', middlewares.permit.ensureAdmin(), (req, res) => {
    store.repositories.users.getAll((err, data)=>{
        responseHelper(res, err, data)
    })
})
module.exports = router;