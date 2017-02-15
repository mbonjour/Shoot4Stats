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
                error: err.toString() //TODO: Prod : attention au message ? Env ?
            })
        } else {
            res.send(shoots)
        }
    })
});

router.get('/:idShoot', (req, res, next) => {
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
        if (err) {
            res.status(500)
            res.send({
                error: err.toString()
            })
        } else {
            res.status(status)
        }
    })
})


module.exports = router;