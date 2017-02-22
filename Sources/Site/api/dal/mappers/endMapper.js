var arrowMapper = require('./arrowMapper').map

module.exports = {
    mapEndWithArrows: (end) => {
        return {
            Id: end.id_End,
            Arrows: end.Arrows.map(arrowMapper)
        }
    }
}