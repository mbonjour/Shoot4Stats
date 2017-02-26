'use strict';

module.exports = function (sequelize, SeqInit) {
    let Arrow = sequelize.define('Arrow', {
        id: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'idArrow'
        },
        posX: {
            type: SeqInit.FLOAT,
            allowNull: true
        },
        posY: {
            type: SeqInit.FLOAT,
            allowNull: true
        },
        point: {
            type: SeqInit.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 10
            }
        },
        fkEnd: {
            type: SeqInit.INTEGER,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                Arrow.belongsTo(models.End,{
                    foreignKey: 'fkEnd'
                })
            }
        }
    })
    return Arrow
}