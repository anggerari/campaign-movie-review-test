const baseHandler = require("./base");
const movieCastValidator = require("../validators/movie-cast");
const movieCastService = require("../services/movie-cast")

class movieCastHandler extends baseHandler {

	async storeMovieCast(req, res) {

		const validation = await movieCastValidator.validateMovieCast(req);
		if (!validation.success) {
			return super.unprocessableEntityResponse(res, validation.message)
		}

		return movieCastService.store(validation.data)
			.then(result => {
				return super.successResponse(res, `Store Movie Cast Data Success !`);
			})
			.catch(err => {
				return super.badRequest(res, err.message, err);
			})

	}

	async movieCastUpdate(req, res) {

		const validation = await movieCastValidator.validateUpdateMovieCast(req);
		if (!validation.success) {
			return super.unprocessableEntityResponse(res, validation.message)
		}

		return movieCastService.update(validation.data.id, req.body)
			.then(result => {
				return super.successResponse(res, `Update Movie Cast Data Success !`);
			})
			.catch(err => {
				return super.badRequest(res, err.message);
			})

	}

	async movieCastDelete(req, res) {
		const validation = await movieCastValidator.validateDeleteMovieCast(req);
		if (!validation.success) {
			return super.unprocessableEntityResponse(res, validation.message)
		}

		return movieCastService.delete(validation.data.id)
			.then(result => {
				return super.successResponse(res, `Delete Movie Cast Data Success !`);
			})
			.catch(err => {
				return super.badRequest(res, err.message);
			})
	}

}

module.exports = new movieCastHandler();