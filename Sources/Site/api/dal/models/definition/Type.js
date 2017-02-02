'use strict';
module.exports = function (store, sequelize, SeqInit) {
    return sequelize.define('Type', {
        id_Type: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        Name: {
            type: SeqInit.STRING(45),
            allowNull: false
        }
    });
}