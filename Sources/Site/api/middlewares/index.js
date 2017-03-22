module.exports = () => {
    var passportFacebook = require('./definition/passportFacebookInit')()
    var permit = require('./definition/permit')()

    return {
        passportFacebook,
        permit
    }
}