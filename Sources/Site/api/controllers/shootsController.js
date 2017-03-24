var express = require('express');
var router = express.Router();
var store = require('../dal')(require('../../config/configs.json').db)
var responseHelper = require('../helpers/responseHelper')
var middlewares = require('../middlewares')()

/* GET home page. */
router.get('/', middlewares.permit.ensureAuthenticated(),(req, res, next) => {
    store.repositories.shoots.get(req.user.id, (err, shoots) => {
        responseHelper(res, err, shoots)
    })
})

router.get('/:id_shoot', middlewares.permit.ensureMyShootByParams(), (req, res, next) => {
    store.repositories.shoots.getById(req.params.id_shoot, (err, shoot) => {
        responseHelper(res, err, shoot)
    })
})

router.get('/:id_shoot/finish', middlewares.permit.ensureMyShootByParams(), (req, res, next) => {
    store.repositories.shoots.finishShoot(req.params.id_shoot, (err, created) => {
        responseHelper(res, err, created)
    })
})

router.post('/', middlewares.permit.ensureAuthenticated(), (req, res) => {
    var shootObject = {
        title: req.body.title,
        description: req.body.description,
        nbEnds: req.body.nb_ends,
        nbArrowsByEnd: req.body.nb_arrows_end,
        type: req.body.type,
        user: req.user.id,
        location: req.body.Location
    }
    store.repositories.shoots.add(shootObject, (err, status) => {
        responseHelper(res, err, status)
    })
})

module.exports = router;