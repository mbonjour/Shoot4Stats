module.exports = {
    map: (location) => {
        if (location) {
            return {
                lat: location.lat,
                long: location.long,
            }
        } else {
            return null
        }

    }
}