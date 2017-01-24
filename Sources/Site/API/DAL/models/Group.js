'use strict';
module.exports = function (store, sequelize, SeqInit) {
    return sequelize.define('Group', {
        id_Group: {
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