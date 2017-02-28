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
            Location: locationMapper.map(shoot.Location),
            type: shoot.Type.name,
            nb_ends: shoot.Ends.length,
            nb_total_ends: shoot.totalEnds,
            nb_arrows_by_end: shoot.arrowsByEnd,
            finished: shoot.finished,
        }
    },
    mapWithArrows: (shoot) => {
        let result = mapper.map(shoot)
        result.gold_hit = (shoot.goldHit*100)
        result.average_arrow = shoot.averageArrow
        result.total = shoot.total
        result.tens = shoot.tens
        result.nines = shoot.nines
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