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
            Id: shoot.id,
            Title: shoot.title,
            Description: shoot.description,
            Date: moment.utc(shoot.date.toISOString().slice(0, -1) + "+0100").fromNow(),
            Location: locationMapper.map(shoot.Location),
            Type: shoot.Type.name,
            NbEnds: shoot.Ends.length,
            NbTotalEnds: shoot.totalEnds,
            NbArrowsByEnd: shoot.arrowsByEnd,
            Finished: shoot.finished,
        }
    },
    mapWithArrows: (shoot) => {
        let result = mapper.map(shoot)
        result.GoldHit = (shoot.goldHit*100)
        result.AverageArrow = shoot.averageArrow
        result.Total = shoot.total
        result.Tens = shoot.tens
        result.Nines = shoot.nines
        result.Ends = shoot.Ends.map(endMapper)
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