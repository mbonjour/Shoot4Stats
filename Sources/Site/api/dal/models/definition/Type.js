'use strict';

module.exports = function (sequelize, SeqInit) {
    let Type = sequelize.define('Type', {
        idType: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: SeqInit.STRING(45),
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                Type.hasMany(models.Shoot,{
                    foreignKey: 'fkType'
                })
            }
        }
    })
    return Type
}