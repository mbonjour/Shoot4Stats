'use strict';

module.exports = function (sequelize, SeqInit) {
    let End = sequelize.define('End', {
        id_End: {
            type: SeqInit.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true,
            field: 'id_End'
        },
        FK_Shoot: {
            type: SeqInit.INTEGER,
            allowNull: false,
            field: 'FK_Shoot'
        }
    }, {
    classMethods: {
      associate: function (models) {
        End.hasMany(models.Arrow,{
          foreignKey: 'FK_End'
        })
        End.belongsTo(models.Shoot, {
          foreignKey: 'FK_Shoot'
        })
      }
    }
  })
  return End;
}