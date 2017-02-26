'use strict';

module.exports = function (sequelize, SeqInit) {
    let End = sequelize.define('End', {
        id: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true,
            field: 'idEnd'
        },
        fkShoot: {
            type: SeqInit.INTEGER,
            allowNull: false
        }
    }, {
    classMethods: {
      associate: function (models) {
        End.hasMany(models.Arrow,{
          foreignKey: 'fkEnd'
        })
        End.belongsTo(models.Shoot, {
          foreignKey: 'fkShoot'
        })
      }
    }
  })
  return End;
}