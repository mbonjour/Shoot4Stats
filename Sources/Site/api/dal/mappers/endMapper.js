var arrowMapper = require('./arrowMapper').map

module.exports = {
    mapEndWithArrows: (end) => {
        return {
            id: end.idEnd,
            Arrows: end.Arrows.map(arrowMapper)
        }
    }
}