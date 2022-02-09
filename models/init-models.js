var DataTypes = require("sequelize").DataTypes;
var _Cast = require("./cast");
var _MovieCast = require("./movie_cast");
var _Movie = require("./movie");
var _Sequelizemetum = require("./sequelizemetum");

function initModels(sequelize) {
  var Cast = _Cast(sequelize, DataTypes);
  var MovieCast = _MovieCast(sequelize, DataTypes);
  var Movie = _Movie(sequelize, DataTypes);
  var Sequelizemetum = _Sequelizemetum(sequelize, DataTypes);

  MovieCast.belongsTo(Cast, { as: "cast", foreignKey: "cast_id"});
  Cast.hasMany(MovieCast, { as: "movie_casts", foreignKey: "cast_id"});
  MovieCast.belongsTo(Movie, { as: "movie", foreignKey: "movie_id"});
  Movie.hasMany(MovieCast, { as: "movie_casts", foreignKey: "movie_id"});

  return {
    Cast,
    MovieCast,
    Movie,
    Sequelizemetum,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
