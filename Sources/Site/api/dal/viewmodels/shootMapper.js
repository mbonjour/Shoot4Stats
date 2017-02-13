var locationMapper = require('./locationMapper')
module.exports = {
    mapWithEnds: (shoot) => {
        return {
            id: shoot.id,
            title: shoot.title,
            description: shoot.description | null,
            date: shoot.date,
            location: locationMapper.map(shoot.Location),
            type: shoot.Type.Name,
            finished: shoot.Ends.length === shoot.totalEnds,
        }
    }
}