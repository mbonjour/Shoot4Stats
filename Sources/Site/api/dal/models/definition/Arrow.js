'use strict';

module.exports = function (sequelize, SeqInit) {
    let Arrow = sequelize.define('Arrow', {
        id_Arrow: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_Arrow'
        },
        PosX: {
            type: SeqInit.FLOAT,
            allowNull: true,
            field: 'PosX'
        },
        PosY: {
            type: SeqInit.FLOAT,
            allowNull: true,
            field: 'PosY'
        },
        Point: {
            type: SeqInit.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 10
            },
            field: 'Point'
        },
        FK_End: {
            type: SeqInit.INTEGER,
            allowNull: false,
            field: 'FK_End'
        }
    }, {
        classMethods: {
            associate: function (models) {
                Arrow.belongsTo(models.End,{
                    foreignKey: 'FK_End'
                })
            }
        }
    })
    return Arrow
}