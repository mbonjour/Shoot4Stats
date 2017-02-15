var moment = require('moment')
var locationMapper = require('./locationMapper')
var endMapper = require('./endMapper').mapEndWithArrows

const mapper = {
    map: (shoot) => {
        // let result1 = JSON.parse(JSON.stringify(shoot)) // TODO: à checker (date/boolean)

        // let result2 = {}
        // Object.assign(result2, shoot);

        // let result3 = {}
        //Object.assign(result3, shoot);
        
        // return result
        return {
            id: shoot.id,
            title: shoot.title,
            description: shoot.description,
            date: moment.utc(shoot.date.toISOString().slice(0, -1) + "+0100").fromNow(),
            location: locationMapper.map(shoot.Location),
            type: shoot.Type.Name,
            nbEnds: shoot.Ends.length,
            nbArrowsByEnd: shoot.arrowsbyend,
            finished: shoot.Ends.length === shoot.totalEnds,
        }
    },
    mapWithArrows: (shoot) => {
        let result = mapper.map(shoot)
        result.goldHit = (shoot.goldHit*100)
        result.averageArrow = shoot.averageArrow
        result.total = shoot.total
        result.tens = shoot.Tens
        result.nines = shoot.Nines
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