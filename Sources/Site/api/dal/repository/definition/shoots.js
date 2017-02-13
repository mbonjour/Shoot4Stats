'use strict'
module.exports = (props) => {
    const mapShoot = require('../../viewmodels/shootMapper').mapWithEnds

    return {
        get: (id_User, callback) => {
            //On vérifie si on doit séléctionner un Shoot en particulier ou juste quelques infos de tout les Shoots
            props.store.models.Shoot.findAll({
                where: {
                    FK_User: id_User
                },
                include: [props.store.models.End, props.store.models.Type, props.store.models.Location]
            }).then((shoots) => {
                callback(null, shoots.map(mapShoot))
            }).catch((err) => {
                callback(err, null)
            })
        },
        getById: (id_User, id_Shoot = null) => {
            props.store.models.Shoot.find({
                where: {
                    id_Shoot: id_Shoot
                },
                include: [props.store.models.End, props.store.models.Arrow, props.store.models.Type, props.store.models.Location]
            }).then((shoots) => {
                callback(null, shoots.map(mapShoot))
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