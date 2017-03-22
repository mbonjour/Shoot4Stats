module.exports = () => {
    var self = {};
    self.ensureMyShootByParams = () => {
        return (req, res, next) => {
            next()

            if(req.user.shoots.indexOf(currShootId) === -1){
                store.repositories.shoots.getLight()
                //reload shoots de la db dans la session
                if(req.user.shoots.indexOf(currShootId) === -1){
                    //error
                } else {
                    next()
                }
            } else {
                next()
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