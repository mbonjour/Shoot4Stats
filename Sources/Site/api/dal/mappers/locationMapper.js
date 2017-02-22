module.exports = {
    map: (location) => {
        if (location) {
            return {
                Latitude: location.lat,
                Longitude: location.long,
            }
        } else {
            return null
        }

    }
}