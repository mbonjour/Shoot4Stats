'use strict'
module.exports = (props) => {
    const mapShoots = require('../../mappers/shootMapper').map
    const mapShootWithArrows = require('../../mappers/shootMapper').mapWithArrows
    const mapNewShoot = require('../../mappers/shootMapper').mapNew

    return {
        get: (idUser, callback) => {
            props.store.models.Shoot.findAll({
                where: {
                    fkUser: idUser
                },
                order: '`Shoot`.`dateShoot` DESC',
                include: [props.store.models.End, props.store.models.Type, props.store.models.Location]
            }).then((shoots) => {
                callback(null, shoots.map(mapShoots))
            }).catch((err) => {
                callback(err, null)
            })
        },

        getLight: (idUser, callback) => {
            props.store.models.Shoot.findAll({
                where: {
                    fkUser: idUser
                },
                attributes: ['id']
            }).then((shootIds) => {
                let result = []
                shootIds.map((shoot) => {result.push(shoot.id)})
                callback(null, result)
            }).catch((err) => {
                callback(err, null)
            })
        },

        getById: (idShoot = null, callback) => {
            props.store.models.Shoot.find({
                where: {
                    idShoot: idShoot
                },
                include: [{
                    model: props.store.models.End,
                    include: [{
                        model: props.store.models.Arrow
                    }]
                }, props.store.models.Type, props.store.models.Location]
            }).then((shoot) => {
                if (shoot) {
                    calculateSummarySpecifications(shoot, () => {
                        let toto = mapShootWithArrows(shoot)
                        callback(null, mapShootWithArrows(shoot))
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
                        idShoot: idShoot
                    }
                })
                .then((shoot) => {
                    // Check if record exists in db
                    // TODO
                    if (shoot) {
                        shoot.updateAttributes({
                                finished: true
                            })
                            .then((created) => {
                                callback(null, created) // TODO: mappers ?
                            })
                    } else {
                        callback({
                            error: "Cannot find Shoot to finish",
                            status: 404
                        }, null)
                    }
                })
        },

        add: (params, callback) => {
            props.store.models.Type.findOne({
                where: {
                    name: params.type
                }
            }).then((type) => {
                props.store.models.Shoot.create({
                    title: params.title,
                    description: params.description,
                    totalEnds: params.nbEnds,
                    arrowsByEnd: params.nbArrowsByEnd,
                    type: type.id,
                    user: params.user //TODO: voir avec auth pour récuperer l'user
                }).then((shoot) => {
                    if (params.location.latitude !== null && params.location.longitude !== null) {
                        addLocationAndLink(params.location, shoot.id, props.store.models, (err, shoot) => {
                            callback(err, shoot) // TODO:Mapper
                        })
                    } else {
                      shoot.dataValues.Ends = []
                      callback(null, mapNewShoot(shoot.dataValues)) // TODO:Mapper
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
    var counts = {}
    shoot.Ends.forEach((end, index, array) => {
        end.Arrows.forEach((arrow, index, array) => {
          counts[arrow.dataValues.point] = (counts[arrow.dataValues.point] || 0) + 1
          var currentArrowValue = arrow.dataValues.point > 10 ? 10 : arrow.dataValues.point
          total += currentArrowValue
          if (currentArrowValue == 9) {
              nbNine++
          } else if (currentArrowValue == 10) {
              nbTen++
          }
        })

        if (index == array.length - 1) {
            shoot.averageArrow = total / (array.length * shoot.dataValues.arrowsByEnd)
            shoot.total = total
            shoot.goldHit = (nbNine + nbTen) / (array.length * shoot.dataValues.arrowsByEnd)
            shoot.tens = nbTen
            shoot.nines = nbNine
            shoot.count = counts
        }
    })
    callback()
}

var addLocationAndLink = (location, idShoot, models, callback) => {
    models.Location.findOrCreate({
        where: {
            longitude: location.longitude,
            latitude: location.latitude
        },
        defaults: {
            longitude: location.longitude,
            latitude: location.latitude
        }
    }).spread((lolocation, created) => {
        let locationId = lolocation.id
        models.Shoot.findOne({
            where: {
                idShoot: idShoot
            }
        }).then((shoot) => {
            // Check if record exists in db
            if (shoot) {
                shoot.updateAttributes({
                    fkLocation: locationId
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