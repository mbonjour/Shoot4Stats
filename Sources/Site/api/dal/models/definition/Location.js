'use strict';
module.exports = function (sequelize, SeqInit) {
    let Location = sequelize.define('Location', {
        id: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'idLocation'
        },
        lat: {
            type: SeqInit.STRING(45),
            allowNull: false
        },
        long: {
            type: SeqInit.STRING(45),
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                Location.hasMany(models.Shoot, {
                    foreignKey: 'fkLocation'
                })
            }
        }
    })
    return Location
}