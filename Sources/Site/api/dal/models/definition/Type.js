'use strict';

module.exports = function (sequelize, SeqInit) {
    let Type = sequelize.define('Type', {
        id_Type: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: SeqInit.STRING(45),
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                Type.hasMany(models.Shoot,{
                    foreignKey: 'FK_Type'
                })
            }
        }
    })
    return Type
}