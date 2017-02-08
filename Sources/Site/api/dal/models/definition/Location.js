'use strict';
module.exports = function (store, sequelize, SeqInit) {
    return sequelize.define('Location', {
        id_Location: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        lat: {
            type: SeqInit.STRING(45),
            allowNull: false
        },
        long: {
            type: SeqInit.STRING(45),
            allowNull: false
        }
    });
}