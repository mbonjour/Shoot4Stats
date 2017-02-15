'use strict';

module.exports = function (sequelize, SeqInit) {
    let Shoot = sequelize.define('Shoot', {
        id: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_Shoot'
        },
        date: {
            type: SeqInit.DATE,
            defaultValue: SeqInit.NOW,
            allowNull: false,
            field: 'Date_Shoot'
        },
        description: {
            type: SeqInit.TEXT,
            allowNull: true,
            field: 'Description'
        },
        title: {
            type: SeqInit.STRING(45),
            allowNull: false,
            field: 'Title'
        },
        totalEnds: {
            type: SeqInit.INTEGER,
            allowNull: false,
            field: 'nb_Ends'
        },
        arrowsbyend: {
            type: SeqInit.INTEGER,
            allowNull: false,
            field: 'nb_ArrowsByEnd'
        },
        type: {
            type: SeqInit.INTEGER,
            allowNull: false,
            field: 'FK_Type'
        },
        user: {
            type: SeqInit.INTEGER,
            allowNull: false,
            field: 'FK_User'
        },
        location: {
            type: SeqInit.INTEGER,
            allowNull: false,
            field: 'FK_Location'
        },
        finished: {
            type: SeqInit.BOOLEAN,
            allowNull: false,
            field: 'Finished'
        }
    }, {
        classMethods: {
            associate: function (models) {
                Shoot.belongsTo(models.Type, {
                    foreignKey: 'FK_Type'
                })

                Shoot.belongsTo(models.User, {
                    foreignKey: 'FK_User'
                })

                Shoot.belongsTo(models.Location, {
                    foreignKey: 'FK_Location'
                })

                Shoot.hasMany(models.End, {
                    foreignKey: 'FK_Shoot'
                })
            }
        }
    })
    return Shoot;
}