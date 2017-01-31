var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //TODO:On renvoit une liste des shoots récent a Vue
    res.json({ title: 'Express' });
});

module.exports = router;
