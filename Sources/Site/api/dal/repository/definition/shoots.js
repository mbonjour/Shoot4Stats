'use strict'
module.exports = (props) => {
    const mapShoots = require('../../mappers/shootMapper').map
    const mapShoot = require('../../mappers/shootMapper').mapWithArrows

    return {

        get: (id_User, callback) => {
            props.store.models.Shoot.findAll({
                where: {
                    FK_User: id_User
                },
                order: '`Shoot`.`Date_Shoot` DESC',
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
                if (shoot) {
                    calculateSummarySpecifications(shoot, () => { //TODO: Shoot null --> renvoyer 404 ? 
                        callback(null, mapShoot(shoot))
                    })
                } else {
                    callback({
                        error: "Cannot find Shoot getById",
                        status: 404
                    }, null)
                }
            }).catch((err) => {
                callback({
                    error: "dbError",
                    status: 500
                }, null)
            })
        },

        finishShoot: (idShoot, callback) => {
            props.store.models.Shoot.findOne({
                    where: {
                        id_Shoot: idShoot
                    }
                })
                .then((shoot) => {
                    // Check if record exists in db
                    if (shoot) {
                        shoot.updateAttributes({
                                finished: true
                            })
                            .then((created) => {
                                callback(null, created)
                            })
                    } else {
                        callback({
                            error: "Cannot find Shoot finish Shoot",
                            status: 404
                        }, null)
                    }
                })
        },

        add: (params, callback) => {
            props.store.models.Type.findOne({
                where: {
                    Name: params.Type
                }
            }).then((type) => {
                props.store.models.Shoot.create({
                    title: params.Title,
                    description: params.Description,
                    totalEnds: params.nb_Ends,
                    arrowsbyend: params.nb_ArrowsByEnd,
                    type: type.id_Type,
                    user: params.User //TODO: voir avec auth pour récuperer l'user
                }).then((shoot) => {
                    if (params.Location) {
                        addLocationAndLink(params.Location, shoot.id, props.store.models, (err, created) => {
                            callback(err, created)
                        })
                    } else {
                        callback(null, created)
                    }
                })
            })
        }
    }
}

var calculateSummarySpecifications = (shoot, callback) => {
    var total = 0
    var nbNine = 0
    var nbTen = 0

    shoot.Ends.forEach((end, index, array) => {
        end.Arrows.forEach((arrow, index, array) => {
            total += arrow.Point
            if (arrow.Point == 9) {
                nbNine++
            } else if (arrow.Point == 10) {
                nbTen++
            }
        })
        if (index == array.length - 1) {
            shoot.averageArrow = total / (array.length * shoot.arrowsbyend)
            shoot.total = total
            shoot.goldHit = (nbNine + nbTen) / (array.length * shoot.arrowsbyend)
            shoot.Tens = nbTen
            shoot.Nines = nbNine
        }
    })
    callback()
}

var addLocationAndLink = (location, idShoot, models, callback) => {
    models.Location.findOrCreate({
        where: {
            long: location.long,
            lat: location.lat
        },
        defaults: {
            long: location.long,
            lat: location.lat
        }
    }).spread((lolocation, created) => {
        let locationId = lolocation.idLocation
        models.Shoot.findOne({
            where: {
                id_Shoot: idShoot
            }
        }).then((shoot) => {
            // Check if record exists in db
            if (shoot) {
                shoot.updateAttributes({
                    FK_Location: locationId
                }).then((created) => {
                    callback(null, created)
                })
            } else {
                callback({
                    error: "Cannot find Shoot at addLocation",
                    status: 404
                }, null)
            }
        })
    })
}