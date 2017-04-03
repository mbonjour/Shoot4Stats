var arrowMapper = require('./arrowMapper').map

module.exports = {
    mapEndWithArrows: (end) => {
        return {
            id: end.idEnd,
            arrows: end.Arrows.map(arrowMapper)
        }
    }
}