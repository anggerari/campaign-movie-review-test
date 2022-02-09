const Joi = require('joi')

const BaseValidator = require('./base')
const {checkMovieById} = require('./external')


class movieValidator extends BaseValidator {

	validateMovie(req) {
		const Schema = Joi.object({
			name: Joi.string()
				.required(),
			language: Joi.string()
				.required(),
			status: Joi.string()
				.required(),
			rating: Joi.number()
				.required()
		})

		return this.validateBody(Schema, req)
	}

	async validateMovieUpdate(req) {

		const ParamSchema = Joi.object({
			id: Joi.number()
				.required()
				.external(checkMovieById)
		})

		let paramValidation = await this.validateParamAsync(ParamSchema, req)
		if (!paramValidation.success) {
			return paramValidation
		}

		const Schema = Joi.object({
			name: Joi.string()
				.required(),
			language: Joi.string()
				.required(),
			status: Joi.string()
				.required(),
			rating: Joi.number()
				.required()
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

	async validateDeleteMovie(req) {
		const ParamSchema = Joi.object({
			id: Joi.number()
				.required()
				.external(checkMovieById)
		})

		return this.validateParamAsync(ParamSchema, req);
	}

}

module.exports = new movieValidator();