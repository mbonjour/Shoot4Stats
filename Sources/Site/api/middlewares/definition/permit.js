module.exports = () => {
    var self = {}
    var store = require('../../dal')(require('../../../config/configs.json').db)
    var responseHelper = require('../../helpers/responseHelper')

    self.ensureMyShootByParams = () => {
        return (req, res, next) => {
            if (req.user) {
                if (req.user.shootList.indexOf(parseInt(req.params.id_shoot)) === -1 || req.user.isAdmin) {
                    //reload shoots de la db dans la session
                    store.repositories.shoots.getLight(req.user.id, (err, shootList) => {
                        if (shootList.indexOf(parseInt(req.params.id_shoot)) === -1) {
                            //error
                            responseHelper(res, {
                                error: "THIS SHOOT IS NOT YOURS YOU PIECE OF SHIT",
                                status: 403
                            }, null)
                        } else {
                            next()
                        }
                    })
                } else {
                    next()
                }
            } else {
                // no authenticated user
                responseHelper(res, {
                    error: "Authentication required",
                    status: 401
                }, null)
            }
        }
    }
    self.ensureMyShootByBody = () => { // A tester
        return (req, res, next) => {
            if (req.user || req.body.id_shoot) {
                if (req.user.shootList.indexOf(parseInt(req.body.id_shoot)) === -1 || req.user.isAdmin) {
                    //reload shoots de la db dans la session
                    store.repositories.shoots.getLight(req.user.id, (err, shootList) => {
                        if (shootList.indexOf(req.body.id_shoot) === -1) {
                            //error UnAuthorized
                            responseHelper(res, {
                                error: "THIS SHOOT IS NOT YOURS, YOU PIECE OF SHIT",
                                status: 403
                            }, null)
                        } else {
                            next()
                        }
                    })
                } else {
                    next()
                }
            } else {
                // no authenticated user
                responseHelper(res, {
                    error: "Authentication required",
                    status: 401
                }, null)
            }
        }
    }
    self.ensureAuthenticated = () => {
        return (req, res, next) => {
            if (req.user) {
                next()
            } else {
                responseHelper(res, {
                    error: "Authentication required",
                    status: 401
                }, null)
            }
        }
    }
    return self;
}