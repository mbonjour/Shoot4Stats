module.exports = (props) => {
    return {
        get: (idShoot) => {
            //On vérifie si on doit séléctionner un Shoot en particulier ou juste quelques infos de tout les Shoots
            return props.store.models.End.findAll({
                where: {
                    FK_Shoot: idShoot
                }
            })
        },
        add: (endObj, callback) => {
            props.store.models.Shoot.findOne({
                where: {
                    id: endObj.id_shoot
                },
                include: [{
                    model: props.store.models.End
                }]
            }).then((shoot) => {
                //addEnd(props, shoot, endObj, callback)
                if (shoot.Ends.length < shoot.totalEnds) {
                    if (shoot.arrowsbyend === endObj.arrows.length) {
                        props.store.models.End.create({
                            FK_Shoot: shoot.id
                        }).then((end) => {
                            if (shoot.Ends.length + 1 ===  shoot.totalEnds){ //
                                props.store.repositories.shoots.finishShoot(shoot.id,(err, created)=>{})
                            }
                            callback(null, endObj.arrows.map(arrow => props.store.models.Arrow.create({
                                Point: arrow.point,
                                FK_End: end.id_End
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
