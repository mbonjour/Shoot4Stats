module.exports = () => {
    var self = {}
    self.ensureMyShootByParams = (store) => {
        return (req, res, next) => {
            if (req.user) {
                if (req.user.shootList.indexOf(parseInt(req.params.id_shoot)) === -1 || req.user.isAdmin) {
                    store.repositories.shoots.getLight(req.user.id, (err, shootList) => {
                        if (shootList.indexOf(req.params.id_shoot) === -1) {
                            //error
                            res.redirect('/#/403')
                        } else {
                            next()
                        }
                    })
                    //reload shoots de la db dans la session
                } else {
                    next()
                }
            } else {
                res.redirect('/#/403')
            }


            // //Logique de vérification d'accès (user looged + shoot respectif)
            // if (matchShoot(user, shootId) || user.isAdmin) {
            //     next()
            //     return 0
            // } else {
            //     res.sendStatus(403)
            //     res.json({status: 403, error: 'aaarrgghhhh'})
            // }
        }
    }
    return self;
}