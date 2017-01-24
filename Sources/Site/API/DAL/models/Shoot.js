'use strict';
module.exports = function (store, sequelize, SeqInit) {
    return sequelize.define('Shoot', {
        id_Shoot: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Date_Shoot: {
            type: SeqInit.DATE,
            defaultValue: SeqInit.NOW,
            allowNull: false,
        },
        Description: {
            type: SeqInit.TEXT,
            allowNull: true
        },
        Title: {
            type: SeqInit.STRING(45),
            allowNull: false
        },
        nb_Ends: {
            type: SeqInit.INTEGER,
            allowNull: false
        },
        nb_ArrowsByEnd: {
            type: SeqInit.INTEGER,
            allowNull: false
        },
        FK_Type: {
            type: SeqInit.INTEGER,
            allowNull: false,
            references: {
                model: store.Type,
                key: 'id_Type'
            }
        }
    });
}