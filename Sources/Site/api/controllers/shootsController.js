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
});

router.get('/:idShoot', (req, res, next) => {
    //TODO : Mettre variable user session ?
    store.repositories.shoots.getById(1, req.params.idShoot, (err, shoot) => {
        responseHelper(res, err, shoot)
    })
});

router.post('/shoots', (req, res) =>{
    var shootObject = {
        Title: req.body.title,
        Description: req.body.description,
        nb_Ends: req.body.nbEnds,
        nb_ArrowsByEnd: req.body.nbArrowsEnd,
        Type: req.body.type,
        User: req.body.user, //TODO: voir avec auth pour récuprer l'user
        Location: {
            longitude: req.body.long,
            latitude: req.body.lat
        }
    }
    store.repositories.shoots.add(shootObject, (err,status)=>{
        responseHelper(res, err, status)
    })
})

module.exports = router;