module.exports = (res, err, data) => {
    if (err) {
        res.status(err.status || 500)
        res.send({
            statusText: err.error
        })
    } else {
        res.json(data)
    }
}