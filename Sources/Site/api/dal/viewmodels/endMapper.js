var arrowMapper = require('./arrowMapper').map

module.exports = {
    mapEndWithArrows: (end) => {
        return {
            id: end.id_End,
            arrows: end.Arrows.map(arrowMapper)
        }
    }
}