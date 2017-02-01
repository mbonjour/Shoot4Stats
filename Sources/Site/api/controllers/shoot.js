var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:idUser', function(req, res, next) {
    //TODO:On renvoit une liste des shoots récent a Vue
    res.json({ title: 'Express', idUser: req.params.idUser});
});

module.exports = router;
