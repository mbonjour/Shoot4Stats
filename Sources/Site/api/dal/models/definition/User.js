'use strict';
module.exports = function (sequelize, SeqInit) {
    let User = sequelize.define('User', {
        id_User: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Firstname: {
            type: SeqInit.STRING(45),
            allowNull: true
        },
        Lastname: {
            type: SeqInit.STRING(45),
            allowNull: true
        },
        email: {
            type: SeqInit.STRING(45),
            allowNull: false
        },
        isAdmin: {
            type: SeqInit.BOOLEAN,
            allowNull: false
        },
        hashPass: {
            type: SeqInit.STRING(75),
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                User.belongsToMany(models.User, {
                    as: 'user',
                    through: 'has_Group',
                    foreignKey: 'id_User',
                    otherKey: 'FK_User'
                })
                User.belongsToMany(models.User, {
                    as: 'coach',
                    through: 'has_Coach',
                    foreignKey: 'id_User',
                    otherKey: 'FK_User'
                })
                User.hasMany(models.Shoot, {
                    foreignKey: 'FK_User'
                })
            }
        }
    })
    return User
}