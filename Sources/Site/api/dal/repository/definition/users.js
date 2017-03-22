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
                    lastname: user.displayName.split(' ')[1],
                    email: null,
                    firstname: user.displayName.split(' ')[0]
                }
            }).spread((user, created) => {
                callback(null, user)
            })
            .catch((err) => {
                callback(err, null)
            })
        }
    }
}