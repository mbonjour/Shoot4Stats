'use strict';
module.exports = function (store) {
    const DEFINITION_PATH = "./definition/"
    var fs = require("fs");
    var path = require("path");
    var repository = {};
    fs.readdirSync(path.join(__dirname, DEFINITION_PATH))
        .filter(function (file) {
            return (file.indexOf(".") !== 0) && (file !== "index.js");
        })
        .forEach(function (file) {
            var fileName = file.slice(0, -3);
            var fileFunction = require(DEFINITION_PATH + fileName)(store);
            repository[fileName] = fileFunction ;
        });
    return repository;
}
