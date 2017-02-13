var express = require('express');
var router = express.Router();
var store = require('../dal')(require('../config/configs.json').db)

/* GET home page. */
router.get('/', function (req, res, next) {
    var Shoots = [];
    store.repositories.shoots.get({
        id_User: 1
    }).then(function (shoots) {
        var i = 0;
        shoots.forEach((shoot, index, array) => {
            store.repositories.ends.get({
                    id_Shoot: shoot.id_Shoot
                })
                .then(function (ends) {
                    if (ends.length == shoot.dataValues.nb_Ends) {
                        shoot.dataValues.finished = true
                    } else {
                        shoot.dataValues.finished = false
                    }
                    Shoots.push(shoot.dataValues)
                    i++
                    if (i === array.length) {
                        callback();
                    }
                })
        });

        function callback() {
            res.send(Shoots)
        }
    })
    //TODO:On gère tout les shoots en calculant si le nb_Ends correspond au nombre réel de End relié au Shoot !!
});

router.get('/:idShoot', function (req, res, next) {
    store.repositories.shoots.get({
        //TODO : Mettre variable user session ?
        id_User: 1,
        id_Shoot: req.params.idShoot
    })
});


function send(Shoots, res) {
    res.send(Shoots)
}
module.exports = router;