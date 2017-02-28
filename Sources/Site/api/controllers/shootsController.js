var express = require('express');
var router = express.Router();
var store = require('../dal')(require('../../config/configs.json').db)
var responseHelper = require('../helpers/responseHelper')

/* GET home page. */
router.get('/', (req, res, next) => {
    //TODO 1 = userID à remplacer
    store.repositories.shoots.get(1, (err, shoots) => {
        responseHelper(res, err, shoots)
    })
})

router.get('/:id_shoot', (req, res, next) => {
    //TODO : Mettre variable user session ?
    store.repositories.shoots.getById(1, req.params.id_shoot, (err, shoot) => {
        responseHelper(res, err, shoot)
    })
})

router.get('/:id_shoot/finish', (req, res, next) => {
    store.repositories.shoots.finishShoot(req.params.id_shoot, (err, created) => {
        responseHelper(res, err, created)
    })
})

router.post('/', (req, res) => {
    var shootObject = {
        title: req.body.title,
        description: req.body.description,
        nbEnds: req.body.nbEnds,
        nbArrowsByEnd: req.body.nb_arrows_end,
        type: req.body.type,
        user: req.body.user, //TODO: voir avec auth pour récuperer l'user
        location: req.body.Location
    }
    store.repositories.shoots.add(shootObject, (err, status) => {
        responseHelper(res, err, status)
    })
})

module.exports = router;