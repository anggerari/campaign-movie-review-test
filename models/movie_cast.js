const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MovieCast', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    movie_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'movies',
        key: 'id'
      }
    },
    cast_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'casts',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'movie_casts',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "movie_id",
        using: "BTREE",
        fields: [
          { name: "movie_id" },
        ]
      },
      {
        name: "cast_id",
        using: "BTREE",
        fields: [
          { name: "cast_id" },
        ]
      },
    ]
  });
};
