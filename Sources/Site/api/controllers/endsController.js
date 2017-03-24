var express = require('express');
var router = express.Router();
var store = require('../dal')(require('../../config/configs.json').db)
var responseHelper = require('../helpers/responseHelper')
var middlewares = require('../middlewares')()

// TODO: middlewares ensureByBody 
router.post('/', middlewares.permit.ensureMyShootByBody(), (req, res) => {
    var endObj = {
        idShoot: req.body.id_shoot,
        arrows: req.body.arrows
    }
    store.repositories.ends.add(endObj, (err, created)=>{
        responseHelper(res, err, created)
    })
})
module.exports = router;