var express = require('express');
var router = express.Router();
var store = require('../dal')(require('../config/configs.json').db)

/* GET home page. */
router.get('/', function (req, res, next) {
    var Shoots = [];
    store.repositories.shoots.get({
        id_User: 1
    }).then(function (shoots) {
        shoots.forEach(function (shoot) {
            store.repositories.ends.get({
                    id_Shoot: shoot.id_Shoot
                })
                .then(function (ends) {
                    shoot.nb_EndsReal = ends.length
                    Shoots.push(shoot)
                })
        }, this);
    }).then(function () {
        //TODO : Controller Shoots à mettre en forme pour res JSON
        console.log(Shoots)
    })
    //TODO:On gère tout les shoots en calculant si le nb_Ends correspond au nombre réel de End relié au Shoot !!
    res.json({
        title: 'Express',
        idUser: req.params.idUser
    });
});

router.get('/:idShoot', function (req, res, next) {
    res.json({
        title: 'Express',
        idUser: req.session.user
    });
});

module.exports = router;