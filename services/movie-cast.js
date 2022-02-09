const moment = require("moment");
const { Op } = require('sequelize');

const { MovieCast } = require('../factories/sequelize').models;

class movieCastService {

	async store(requestData) {

		const findExistMovieCast = await MovieCast.findOne({
			where: {
				movie_id: requestData.movie_id,
				cast_id: requestData.cast_id
			},
			raw: true
		}).then(data => data)
			.catch(err => {throw err});

		if(findExistMovieCast !== null) {
			throw "Movie Cast alredy been inputed !"
		} else {
			return MovieCast.create({
				movie_id: requestData.movie_id,
				cast_id: requestData.cast_id
			})
		}
	}

	async update(movieCastId, requestData) {

		const updatedData = {
			movie_id: requestData.movie_id,
			cast_id: requestData.cast_id
		}

		return MovieCast.update(updatedData, {
			where: {
				id: movieCastId
			}
		}).then(data => data)
			.catch((err) => {
				throw err;
			})

	}

	async delete(movieCastId) {

		return MovieCast.destroy({
			where: {
				id: movieCastId
			}
		}).then(data => data)
			.catch(err => {throw err})

	}

}

module.exports = new movieCastService();