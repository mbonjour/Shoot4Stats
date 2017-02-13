'use strict'
module.exports = (props) => {
    const mapShoots = require('../../viewmodels/shootMapper').map
    const mapShoot = require('../../viewmodels/shootMapper').mapWithArrows

    return {
        get: (id_User, callback) => {
            props.store.models.Shoot.findAll({
                where: {
                    FK_User: id_User
                },
                include: [props.store.models.End, props.store.models.Type, props.store.models.Location]
            }).then((shoots) => {
                callback(null, shoots.map(mapShoots))
            }).catch((err) => {
                callback(err, null)
            })
        },
        getById: (id_User, id_Shoot = null, callback) => {
            props.store.models.Shoot.find({
                where: {
                    id_Shoot: id_Shoot
                },
                include: [{
                    model: props.store.models.End,
                    include: [{
                        model: props.store.models.Arrow
                    }]
                }, props.store.models.Type, props.store.models.Location]
            }).then((shoot) => {
                callback(null, mapShoot(shoot))
            }).catch((err) => {
                callback(err, null)
            })
            return false
        },
        add: (params) => {
            return false
        }
    }
}