var config = require('../../../config/configs.json')
var store = require('../../dal')(config.db)
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy

module.exports = () => {
    passport.use(new FacebookStrategy({
            clientID: config.passportFacebook.clientID,
            clientSecret: config.passportFacebook.clientSecret,
            callbackURL: config.passportFacebook.callback
        },
        function (accessToken, refreshToken, profile, cb) {
            // store.repositories.users.getOrCreate(profile, (err, user) => {
            return cb(null, profile)
            // })
        }))

    passport.serializeUser(function (user, cb) {
        // store.repositories.users.getOrCreate(user.user, (err, created) => {
        cb(null, user)
    })

    passport.deserializeUser(function (user, cb) {
        cb(null, user)
    })

    return passport
}