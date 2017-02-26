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
                    id: endObj.IdShoot
                },
                include: [{
                    model: props.store.models.End
                }]
            }).then((shoot) => {
                //addEnd(props, shoot, endObj, callback)
                if (shoot.Ends.length < shoot.totalEnds) {
                    if (shoot.arrowsByEnd === endObj.Arrows.length) {
                        props.store.models.End.create({
                            fkShoot: shoot.id
                        }).then((end) => {
                            if (shoot.Ends.length + 1 ===  shoot.totalEnds){ //
                                props.store.repositories.shoots.finishShoot(shoot.id,(err, created)=>{})
                            }
                            callback(null, endObj.Arrows.map(arrow => props.store.models.Arrow.create({
                                point: arrow.point,
                                fkEnd: end.IdEnd
                            })))
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
