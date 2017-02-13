'use strict';
module.exports = function (store, sequelize, SeqInit) {
    return sequelize.define('End', {
        id_End: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        FK_Shoot: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: store.Shoot,
                key: 'id_Shoot'
            }
        }
    });
}