'use strict';

module.exports = function (sequelize, SeqInit) {
    let Shoot = sequelize.define('Shoot', {
        id: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'idShoot'
        },
        date: {
            type: SeqInit.DATE,
            defaultValue: SeqInit.NOW,
            allowNull: false,
            field: 'dateShoot'
        },
        description: {
            type: SeqInit.TEXT,
            allowNull: true
        },
        title: {
            type: SeqInit.STRING(45),
            allowNull: false
        },
        nbEnds: {
            type: SeqInit.INTEGER,
            allowNull: false
        },
        nbArrowsByEnd: {
            type: SeqInit.INTEGER,
            allowNull: false
        },
        type: {
            type: SeqInit.INTEGER,
            allowNull: false,
            field: 'fkType'
        },
        user: {
            type: SeqInit.INTEGER,
            allowNull: false,
            field: 'fkUser'
        },
        location: {
            type: SeqInit.INTEGER,
            allowNull: true,
            field: 'fkLocation'
        },
        finished: {
            type: SeqInit.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                Shoot.belongsTo(models.Type, {
                    foreignKey: 'fkType'
                })

                Shoot.belongsTo(models.User, {
                    foreignKey: 'fkUser'
                })

                Shoot.belongsTo(models.Location, {
                    foreignKey: 'fkLocation'
                })

                Shoot.hasMany(models.End, {
                    foreignKey: 'fkShoot'
                })
            }
        }
    })
    return Shoot;
}