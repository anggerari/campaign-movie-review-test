const moment = require("moment");
const { Op } = require('sequelize');

const { Movie, Cast, MovieCast } = require('../factories/sequelize').models;


class movieServices {

	async getMovies() {
		return Movie.findAll({
			attributes: ["id",'name','language','status','rating'],
			include: [{
				attributes: ['cast_id'],
				as: "movie_casts",
				model: MovieCast,
				include: {
					as: "cast",
					model: Cast,
					attributes: ["name","birthday","deadday","rating"],
				}
			}],
			order: [["id", "ASC"]],
		})
	}

	async store(requestData) {

		const findExistingMovie = await Movie.findOne({
			where: {
				name: requestData.name
			}
		}).then(data => data)
			.catch(err => {throw err});

		if(findExistingMovie !== null) {
			throw "Movie already been inputed !"
		} else {
			return Movie.create({
				name: requestData.name,
				language: requestData.language,
				status: requestData.status,
				rating: requestData.rating,
			})
		}



	}

	async update(movieId, requestData) {

		const updatedData = {
			name: requestData.name,
			language: requestData.language,
			status: requestData.status,
			rating: requestData.rating,
			updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
		}

		return Movie.update(updatedData, {
			where: {
				id: movieId
			}
		}).then(data => data)
			.catch((err) => {
				throw err;
			})

	}

	async delete(movieId) {

		return Movie.destroy({
			where: {
				id: movieId
			}
		}).then(data => data)
			.catch((err) => {
				throw err;
			})

	}

}

module.exports = new movieServices();