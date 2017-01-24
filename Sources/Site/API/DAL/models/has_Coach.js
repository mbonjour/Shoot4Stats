'use strict';
module.exports = function (store, sequelize, SeqInit) {
    return sequelize.define('has_Coach', {
        FK_User:{
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: store.User,
                key: 'id_User'
            }
        },
        FK_Group:{
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: store.Group,
                key: 'id_Group'
            }
        }
    });
}