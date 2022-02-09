const Joi = require('joi')

const BaseValidator = require('./base')
const {
	checkMovieById,
	checkCastById,
	checkMovieCastById} = require('./external')

class movieCastValidator extends BaseValidator {

	async validateMovieCast(req) {
		const Schema = Joi.object({
			movie_id: Joi.number()
				.required()
				.external(checkMovieById),
			cast_id: Joi.number()
				.required()
				.external(checkCastById),
		})

		return this.validateBodyAsync(Schema, req)
	}

	async validateUpdateMovieCast(req) {
		const ParamSchema = Joi.object({
			id: Joi.number()
				.required()
				.external(checkMovieCastById)
		})

		let paramValidation = await this.validateParamAsync(ParamSchema, req)
		if (!paramValidation.success) {
			return paramValidation
		}

		const Schema = Joi.object({
			movie_id: Joi.number()
				.required()
				.external(checkMovieById),
			cast_id: Joi.number()
				.required()
				.external(checkCastById),
		})

		const bodyValidation = await this.validateBodyAsync(Schema, req)
		if (!bodyValidation.success) {
			return bodyValidation
		}

		bodyValidation.data = {
			...bodyValidation.data,
			...paramValidation.data,
		}

		return bodyValidation
	}

	async validateDeleteMovieCast(req) {
		const Schema = Joi.object({
			id: Joi.number()
				.required()
				.external(checkMovieCastById)
		})

		return this.validateParamAsync(Schema, req);
	}

}

module.exports = new movieCastValidator();