'use strict';
module.exports = function (store, sequelize, SeqInit) {
    return sequelize.define('has_Shoot', {
        FK_User:{
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: store.User,
                key: 'id_User'
            }
        },
        FK_Shoot:{
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