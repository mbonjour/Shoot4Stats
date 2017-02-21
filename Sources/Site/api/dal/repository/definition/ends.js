module.exports = function (props) {
    return {
        get: function (idShoot) {
            //On vérifie si on doit séléctionner un Shoot en particulier ou juste quelques infos de tout les Shoots
                return props.store.models.End.findAll({
                    where: {
                        FK_Shoot: idShoot
                    }
                })
        },
        add: function (params) {
            
        }
    }
}