'use strict';


module.exports = function (properties) {
    const DEFINITION_PATH = "./definition/"
    var fs = require("fs");
    var path = require("path");
    var models={};
    fs.readdirSync(path.join(__dirname, DEFINITION_PATH))
    .filter(function (file) {
        return (file.indexOf(".") !== 0);
    })
    .forEach(function (file) {
        var modelName = file.slice(0, -3);
        var model = require(DEFINITION_PATH + modelName)(properties.store, properties.sequelize, properties.SeqInit);
        models[model.name] = model;
    });
    return models;
}
