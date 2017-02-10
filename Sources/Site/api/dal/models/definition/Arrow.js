'use strict';
module.exports = function (store, sequelize, SeqInit) {
    return sequelize.define('Arrow', {
        id_Arrow: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        PosX: {
            type: SeqInit.FLOAT,
            allowNull: true
        },
        PosY: {
            type: SeqInit.FLOAT,
            allowNull: true
        },
        Point: {
            type: SeqInit.INTEGER,
            allowNull: false,
            validate: {min : 0, max: 10}
        },
        FK_End: {
            type: SeqInit.INTEGER,
            allowNull: false,
            references: {
                model: store.End,
                key: 'id_End'
            }
        }
    });
}