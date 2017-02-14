var locationMapper = require('./locationMapper')

var endMapper = require('./endMapper').mapEndWithArrows
const mapper = {
    map: (shoot) => {
        // let result1 = JSON.parse(JSON.stringify(shoot)) // TODO: à checker (date/boolean)
        
        // let result2 = {}
        // Object.assign(result2, shoot);

        // let result3 = {}
        //Object.assign(result3, shoot);
        // return result1
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
        let result = mapper.map(shoot)
        result.goldHit = (shoot.goldHit*100)
        result.averageArrow = shoot.averageArrow
        result.total = shoot.total
        result.ends = shoot.Ends.map(endMapper)
        return result
        // return {
        //     title: shoot.title,
        //     description: shoot.description,
        //     date: shoot.date,
        //     location: locationMapper.map(shoot.Location),
        //     type: shoot.Type.Name,
        //     ends: shoot.Ends.map(endMapper),
        //     totalEnds: shoot.totalEnds,
        //     arrowsbyend: shoot.arrowsbyend
        // }
    }
}
module.exports = mapper