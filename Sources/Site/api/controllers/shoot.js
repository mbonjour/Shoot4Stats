var express = require('express');
var router = express.Router();
var store = require ('../dal')(require('../config/configs.json').db)

/* GET home page. */
router.get('/:idUser', function(req, res, next) {
    var result = store.repository.getShoots({
        models: store.models,
        idUser: req.params.idUser
    });
    //TODO:On renvoit une liste des shoots récents a Vue
    res.json({ title: 'Express', idUser: req.params.idUser});
});

module.exports = router;
