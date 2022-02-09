const baseHandler = require("./base");
const castValidator = require("../validators/cast");
const castServices = require('../services/cast')

class castHandler extends baseHandler {

	async castList(req, res) {

		return castServices.getCast()
			.then(result => {
				return super.successResponse(res, `Cast data successfully retrieved`, result);
			})
			.catch(err => {
				return super.badRequest(res, err.message);
			})

	}

	async storeCastData(req, res) {

		const validation = await castValidator.validateCast(req);
		if (!validation.success) {
			return super.unprocessableEntityResponse(res, validation.message)
		}

		return castServices.store(validation.data)
			.then(result => {
				return super.successResponse(res, `Store Cast Data Success !`);
			})
			.catch(err => {
				return super.badRequest(res, err.message);
			})

	}

	async updateCast(req, res) {

		const validation = await castValidator.validateCastUpdate(req);
		if (!validation.success) {
			return super.unprocessableEntityResponse(res, validation.message)
		}

		return castServices.update(validation.data.id, req.body)
			.then(result => {
				return super.successResponse(res, `Update Cast Data Success !`);
			})
			.catch(err => {
				return super.badRequest(res, err.message);
			})

	}

	async deleteCast(req, res) {

		const validation = await castValidator.validateCastDelete(req);
		if (!validation.success) {
			return super.unprocessableEntityResponse(res, validation.message)
		}

		return castServices.delete(validation.data.id)
			.then(result => {
				return super.successResponse(res, `Delete Cast Data Success !`);
			})
			.catch(err => {
				return super.badRequest(res, err.message);
			})

	}

}

module.exports = new castHandler();