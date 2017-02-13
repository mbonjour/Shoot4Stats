'use strict';


// module.exports = function (properties) {
//     const DEFINITION_PATH = "./definition/"
//     var fs = require("fs");
//     var path = require("path");
//     var models = {};
//     fs.readdirSync(path.join(__dirname, DEFINITION_PATH))
//         .filter(function (file) {
//             return (file.indexOf(".") !== 0);
//         })
//         .forEach(function (file) {
//             var modelName = file.slice(0, -3);
//             var model = require(DEFINITION_PATH + modelName)(properties.store, properties.sequelize, properties.SeqInit);
//             models[model.name] = model;
//         });

//     Object.keys(models).forEach(function (modelName) {
//         if ('associate' in models[modelName]) {
//             models[modelName].associate(models)
//         }
//     })

//     return models;
// }

module.exports = function (properties) {
    var fs = require('fs')
    var path = require('path')
    var sequelize = properties.sequelize
    var db = {}
    var modelsPath = path.join(__dirname, '/definition')

    fs
        .readdirSync(modelsPath)
        .filter(function (file) {
            return (file.indexOf('.') !== 0)
        })
        .forEach(function (file) {
            var model = sequelize.import(path.join(modelsPath, file))
            if (model instanceof Array) {
                model.forEach(function (m) {
                    db[m.name] = m
                })
            } else {
                db[model.name] = model
            }
        })

    Object.keys(db).forEach(function (modelName) {
        if ('associate' in db[modelName]) {
            db[modelName].associate(db)
        }
    })
    return db
}