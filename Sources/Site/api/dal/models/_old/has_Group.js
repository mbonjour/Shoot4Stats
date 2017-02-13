'use strict';
module.exports = function (sequelize, SeqInit) {
    return sequelize.define('has_Group', {
        FK_User:{
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        FK_Group:{
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    });
}