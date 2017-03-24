# Auth Documentation

## Utilisation / mise en place
Le module [PassportJS](http://passportjs.org/) de Jared Hanson offre des Stratégies pour de nombreuses connexions externes et même interne et le systéme est très simpla à utiliser, en effet comme l'on voit sur la documentation (p.ex. Facebook)

Mon code pour l'authentification au sein de Shoot4Stats : 
```js
var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy

passport.use(new FacebookStrategy({
    clientID: config.passportFacebook.clientID,
    clientSecret: config.passportFacebook.clientSecret,
    callbackURL: config.passportFacebook.callback,
    profileFields: ['id', 'first_name', 'last_name', 'photos', 'email']
    },
    function (accessToken, refreshToken, profile, cb) {
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
```
Ce code sert a instancier le module Passport afin de détérminer les secrets pour Facebook mais aussi la création/recherche d'un utilisateur lors de la connexion de celui-ci.

L'on voit aussi que je demande ce que je veux à Facebook, toutes les permissions sont répertoriées [ici](https://developers.facebook.com/docs/facebook-login/permissions/)

Ce que je fais aussi ici c'est que je mute l'objet User afin de lui ajouter la liste des shoots qui lui appartiennent pour que le middleware puisse vérifier par la suite que tel ou tel shoots soit à lui.

Puis les routes qui permettent l'authentification :
```js
router.get('/facebook',(req, res, next) => {
  req.session.url = req.query.url
  next()
}, passport.authenticate('facebook', {scope: ['email']}))

router.get('/facebook/return', passport.authenticate(
  'facebook', {
    failureRedirect: '/#/'
  }
), (req, res) =>{
  res.redirect('/#' + req.session.url || '/#/')
  delete req.session.url
})
```

Ce sont les 2 routes qui permettent de s'authentifier, en effet, cela se passe comme ceci : 

![Modèle de la DB](./Shemes/authFaceSheme.png)

