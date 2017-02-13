'use strict';
module.exports = function (sequelize, SeqInit) {
    let Location = sequelize.define('Location', {
        idLocation: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_Location'
        },
        lat: {
            type: SeqInit.STRING(45),
            allowNull: false,
            field: 'lat'
        },
        long: {
            type: SeqInit.STRING(45),
            allowNull: false,
            field: 'long'
        }
    }, {
        classMethods: {
            associate: function (models) {
                Location.hasMany(models.Shoot, {
                    foreignKey: 'FK_Location'
                })
            }
        }
    })
    return Location
}