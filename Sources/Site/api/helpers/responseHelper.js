module.exports = (res, err, data) => {
    if (err) {
        res.status(err.status || 500)
        res.send({
            error: err.error
        })
    } else {
        res.json(data)
    }
}