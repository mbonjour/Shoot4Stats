var locationMapper = require('./locationMapper')

var endMapper = require('./endMapper')

module.exports = {
    map: (shoot) => {
        return {
            id: shoot.id,
            title: shoot.title,
            description: shoot.description,
            date: shoot.date,
            location: locationMapper.map(shoot.Location),
            type: shoot.Type.Name,
            finished: shoot.Ends.length === shoot.totalEnds,
        }
    },
    mapWithArrows: (shoot) => {
        return {
            id: shoot.id,
            title: shoot.title,
            description: shoot.description,
            date: shoot.date,
            location: locationMapper.map(shoot.Location),
            type: shoot.Type.Name,
            finished: shoot.Ends.length === shoot.totalEnds,
        }
    }
}