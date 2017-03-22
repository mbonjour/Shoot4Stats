module.exports = {
    map: (user) => {
        return {
            id: user.id,
            is_admin: user.isAdmin,
            first_name: user.firstname,
            last_name: user.lastname,
            email: user.email
        }
    }
}