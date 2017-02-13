var express = require('express');
var router = express.Router();
var store = require('../dal')(require('../config/configs.json').db)

/* GET home page. */
router.get('/', (req, res, next) => {
    //var Shoots = [];
    store.repositories.shoots.get(1, (err, shoots) => {
        if (err) {
            res.status(500)
            res.send({
                error: err.toString()
            })
        } else {
            res.send(shoots)
        }
    })
});

router.get('/:idShoot', function (req, res, next) {
    //TODO : Mettre variable user session ?
    store.repositories.shoots.getById(1, req.params.idShoot, (err, shoot) => {
        if (err) {
            res.status(500)
            res.send({
                error: err.toString()
            })
        } else {
            res.send(shoot)
        }
    })
});



module.exports = router;