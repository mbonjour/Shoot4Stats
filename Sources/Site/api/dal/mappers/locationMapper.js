module.exports = {
    map: (location) => {
        if (location) {
            return {
                latitude: location.latitude,
                longitude: location.longitude,
            }
        } else {
            return null
        }

    }
}