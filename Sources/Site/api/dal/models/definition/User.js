'use strict';
module.exports = function (store, sequelize, SeqInit) {
    return sequelize.define('User', {
        id_User: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Firstname: {
            type: SeqInit.STRING(45),
            allowNull: true
        },
        Lastname: {
            type: SeqInit.STRING(45),
            allowNull: true
        },
        email: {
            type: SeqInit.STRING(45),
            allowNull: false
        },
        isAdmin: {
            type: SeqInit.BOOLEAN,
            allowNull: false
        },
        hashPass: {
            type: SeqInit.STRING(75),
            allowNull: true
        }
    });
}