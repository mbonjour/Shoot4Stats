module.exports = function (props) {
    return {
        get: function (params) {
            //On vérifie si on doit séléctionner un Shoot en particulier ou juste quelques infos de tout les Shoots
                return props.store.models.End.findAll({
                    where: {
                        FK_Shoot: params.id_Shoot
                    }
                })
        },
        add: function (params) {

        }
    }
}