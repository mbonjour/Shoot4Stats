'use strict';

module.exports = function (sequelize, SeqInit) {
    let Group = sequelize.define('Group', {
        id: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'idGroup'
        },
        name: {
            type: SeqInit.STRING(45),
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                Group.belongsToMany(models.User, {
                    as: 'users',
                    through: 'has_Group',
                    foreignKey: 'idGroup',
                    otherKey: 'fkGroup'
                })
                Group.belongsToMany(models.User, {
                    as: 'coaches',
                    through: 'has_Coach',
                    foreignKey: 'idGroup',
                    otherKey: 'fkGroup'
                })
            }
        }
    })
    return Group
}