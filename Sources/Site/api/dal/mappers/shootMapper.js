var moment = require('moment')
var locationMapper = require('./locationMapper')
var endMapper = require('./endMapper').mapEndWithArrows

const mapper = {
    map: (shoot) => {
        return {
            id: shoot.id,
            title: shoot.title,
            description: shoot.description,
            date: moment.utc(shoot.date.toISOString().slice(0, -1)).fromNow(),
            Location: locationMapper.map(shoot.Location),
            type: shoot.Type.name,
            nb_ends: shoot.Ends.length,
            nb_total_ends: shoot.totalEnds,
            nb_arrows_by_end: shoot.arrowsByEnd,
            finished: shoot.finished
        }
    },
    mapWithArrows: (shoot) => {
        let result = mapper.map(shoot)
        result.gold_hit = (shoot.goldHit*100)
        result.average_arrow = shoot.averageArrow
        result.total = shoot.total
        result.tens = shoot.tens
        result.nines = shoot.nines
        result.count = shoot.count
        result.ends = shoot.Ends.map(endMapper)
        return result
    },
    mapNew: (shoot) => {
      return {
        id: shoot.id,
        title: shoot.title,
        description: shoot.description,
        date: moment.utc(shoot.date.toISOString().slice(0, -1)).fromNow(),
        Location: locationMapper.map(shoot.Location),
        nb_ends: shoot.Ends.length,
        ends: shoot.Ends,
        nb_total_ends: shoot.totalEnds,
        nb_arrows_by_end: shoot.arrowsByEnd,
        finished: shoot.finished
      }
    }
}
module.exports = mapper