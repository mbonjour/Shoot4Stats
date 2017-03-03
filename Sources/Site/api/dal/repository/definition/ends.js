module.exports = (props) => {
    return {
        get: (idShoot) => {
            return props.store.models.End.findAll({
                where: {
                    fkShoot: idShoot
                }
            })
        },
        add: (endObj, callback) => {
            props.store.models.Shoot.findOne({
                where: {
                    id: endObj.idShoot
                },
                include: [{
                    model: props.store.models.End
                }]
            }).then((shoot) => {
                if (shoot.Ends.length < shoot.totalEnds) {
                    if (shoot.arrowsByEnd === endObj.arrows.length) { //Pourquoi il perd le endObj ?!?
                        props.store.models.End.create({
                            fkShoot: shoot.id
                        }).then((end) => {
                            if (shoot.Ends.length + 1 === shoot.totalEnds) { //
                                props.store.repositories.shoots.finishShoot(shoot.id, (err, created) => {})
                            }

                            Promise.all(endObj.arrows.map((arrow) => {
                                return props.store.models.Arrow.create({
                                    point: arrow.point,
                                    fkEnd: end.id
                                })
                            })).then((arrows) => {
                                callback(null, arrows)
                            }).catch((err) => {
                                console.log(err)
                                callback({
                                    error: "Db error",
                                    status: 500 //TODO: Voir status correct
                                }, null)
                            })

                            //callback(null, )
                        }).catch((err) => {
                            console.log(err)
                            callback({
                                error: "Db error",
                                status: 500 //TODO: Voir status correct
                            }, null)
                        })
                    } else {
                        callback({
                            error: "",
                            status: 404 //TODO: Voir status correct
                        }, null)
                    }
                } else {
                    callback({
                        error: "Too much ends, Shoot finished",
                        status: 404 //TODO: Voir status correct
                    }, null)
                }
            })
        }
    }
}