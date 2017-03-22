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
                    firstname: user.displayName.split(' ')[0]
                }
            })
        }
    }
}