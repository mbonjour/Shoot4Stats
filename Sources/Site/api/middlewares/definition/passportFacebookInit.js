var config = require('../../../config/configs.json')
var store = require('../../dal')(config.db)
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy

module.exports = () => {
  passport.use(new FacebookStrategy({
      clientID: config.passportFacebook.clientID,
      clientSecret: config.passportFacebook.clientSecret,
      callbackURL: config.passportFacebook.callback,
      profileFields: ['id', 'first_name', 'last_name', 'photos', 'email']
    },
    function (accessToken, refreshToken, profile, cb) {
      //régler problème si l'user refuse de transmettre son email
      store.repositories.users.getOrCreate(profile, (err, user) => {
        store.repositories.shoots.getLight(user.id, (err, arrayOfIds) => {
          user.shootList = arrayOfIds
          return cb(err, user)
        })
      })
    }))
  passport.serializeUser(function (user, cb) {
    cb(null, user)
  })
  passport.deserializeUser(function (user, cb) {
    cb(null, user)
  })
  return passport
}