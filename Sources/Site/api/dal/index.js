'use strict';
module.exports = function (dbConfigs) {
    
    var SeqInit = require('sequelize');
    var store = {models:{},repositories:{}};
    var fs = require("fs");
    var path = require("path");
    var sequelize = new SeqInit(dbConfigs.name, dbConfigs.username, dbConfigs.password, {
        host: dbConfigs.hostname,
        dialect: 'mysql',
        logging: false,
        define: {
            timestamps: false,
            freezeTableName: true
        }
    });
    
    store.repositories = require('./repository')({store:store,sequelize:sequelize});
    store.models = require('./models')({store:store,sequelize:sequelize,SeqInit:SeqInit});
    
    return store;
};