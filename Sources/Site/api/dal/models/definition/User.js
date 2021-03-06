'use strict';
module.exports = function (sequelize, SeqInit) {
    let User = sequelize.define('User', {
        id: {
            type: SeqInit.STRING(45),
            allowNull: false,
            primaryKey: true,
            field: 'idUser'
        },
        firstname: {
            type: SeqInit.STRING(45),
            allowNull: true
        },
        lastname: {
            type: SeqInit.STRING(45),
            allowNull: true
        },
        email: {
            type: SeqInit.STRING(45),
            allowNull: true
        },
        isAdmin: {
            type: SeqInit.BOOLEAN,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                User.belongsToMany(models.Group, {
                    as: 'user',
                    through: 'has_Group',
                    foreignKey: 'idUser',
                    otherKey: 'fkUser'
                })
                User.belongsToMany(models.Group, {
                    as: 'coach',
                    through: 'has_Coach',
                    foreignKey: 'idUser',
                    otherKey: 'fkUser'
                })
                User.hasMany(models.Shoot, {
                    foreignKey: 'fkUser'
                })
            }
        }
    })
    return User
}