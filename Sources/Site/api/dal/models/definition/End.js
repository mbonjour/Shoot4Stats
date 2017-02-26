'use strict';

module.exports = function (sequelize, SeqInit) {
    let End = sequelize.define('End', {
        idEnd: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
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