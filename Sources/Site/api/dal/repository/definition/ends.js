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
        add: (endObj) => {
            props.store.models.Shoot.findOne({
                where: {
                    id: endObj.id_Shoot
                },
                attributes: []
            })
        }
    }
}