const baseHandler = require("./base");
const movieValidator = require("../validators/movie")
const movieServices = require("../services/movie")

class movieHandler extends baseHandler {

	async storeMovieData(req, res) {

		const validation = await movieValidator.validateMovie(req);
		if (!validation.success) {
			return super.unprocessableEntityResponse(res, validation.message)
		}

		return movieServices.store(validation.data)
			.then(result => {
				return super.successResponse(res, `Store Movie Data Success !`);
			})
			.catch(err => {
				return super.badRequest(res, err.message, err);
			})

	}

	async movieList(req, res) {

		return movieServices.getMovies()
			.then(result => {
				return super.successResponse(res, `Movie data successfully retrieved`, result);
			})
			.catch(err => {
				return super.badRequest(res, err.message);
			})

	}

	async updateMovie(req, res) {

		const validation = await movieValidator.validateMovieUpdate(req);
		if (!validation.success) {
			return super.unprocessableEntityResponse(res, validation.message)
		}

		return movieServices.update(validation.data.id, req.body)
			.then(result => {
				return super.successResponse(res, `Update Movie Data Success !`);
			})
			.catch(err => {
				return super.badRequest(res, err.message);
			})

	}

	async deleteMovie(req, res) {

		const validation = await movieValidator.validateDeleteMovie(req);
		if (!validation.success) {
			return super.unprocessableEntityResponse(res, validation.message)
		}

		return movieServices.delete(validation.data.id)
			.then(result => {
				return super.successResponse(res, `Delete Movie Data Success !`);
			})
			.catch(err => {
				return super.badRequest(res, err.message);
			})

	}

}

module.exports = new movieHandler();