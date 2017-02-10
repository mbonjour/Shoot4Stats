module.exports = function (props) {
    return {
        get: function (params) {
            //On vérifie si on doit séléctionner un Shoot en particulier ou juste quelques infos de tout les Shoots
            if (!params.id_Shoot) {
                return props.store.models.Shoot.findAll({
                    where: {
                        FK_User: params.id_User
                    },
                    attributes: ['id_Shoot', 'Title', 'Description', 'Date_Shoot', 'FK_Type', 'nb_Ends']
                })
            } else {
                return props.store.models.Shoot.findAll({
                    where: {
                        id_Shoot: params.id_Shoot
                    }
                })
            }
        },
        add: function (params) {

        }
    }
}