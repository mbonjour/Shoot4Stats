'use strict';
module.exports = function (store, sequelize, SeqInit) {
    return sequelize.define('has_Arrow', {
        FK_Arrow:{
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: store.Arrow,
                key: 'id_Arrow'
            }
        },
        FK_End:{
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: store.End,
                key: 'id_End'
            }
        }
    });
}