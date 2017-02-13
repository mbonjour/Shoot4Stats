'use strict';

module.exports = function (sequelize, SeqInit) {
    let Group = sequelize.define('Group', {
        id_Group: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_Group'
        },
        Name: {
            type: SeqInit.STRING(45),
            allowNull: false,
            field: 'Name'
        }
    }, {
        classMethods: {
            associate: function (models) {
                Group.belongsToMany(models.User, {
                    as: 'users',
                    through: 'has_Group',
                    foreignKey: 'id_Group',
                    otherKey: 'FK_Group'
                })
                Group.belongsToMany(models.User, {
                    as: 'coaches',
                    through: 'has_Coach',
                    foreignKey: 'id_Group',
                    otherKey: 'FK_Group'
                })
            }
        }
    })
    return Group
}