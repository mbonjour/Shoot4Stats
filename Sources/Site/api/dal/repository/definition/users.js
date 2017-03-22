module.exports = (props) => {
    return {
        getOrCreate: (user, callback) => {
            props.store.models.User.findOrCreate({
                where: {
                    id: user.provider + '_' + user.id
                },
                defaults: {
                    id: user.provider + '_' + user.id,
                    isAdmin: false,
                    lastname: user.last_name,
                    email: user.emails[0].value,
                    firstname: user.first_name
                }
            }).spread((findUser, created) => {
                callback(null, findUser)
            })
            .catch((err) => {
                callback(err, null)
            })
        }
    }
}