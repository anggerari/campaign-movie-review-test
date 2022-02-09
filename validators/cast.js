const Joi = require('joi')

const BaseValidator = require('./base')
const {checkCastById, checkMovieById} = require('./external')

class castValidator extends BaseValidator {

	validateCast(req) {
		const Schema = Joi.object({
			name: Joi.string()
				.required(),
			birthday: Joi.date()
				.required(),
			deadday: Joi.date()
				.required(),
			rating: Joi.number()
				.required()
		})

		return this.validateBody(Schema, req)
	}

	async validateCastUpdate(req){
		const ParamSchema = Joi.object({
			id: Joi.number()
				.required()
				.external(checkCastById)
		})

		let paramValidation = await this.validateParamAsync(ParamSchema, req)
		if (!paramValidation.success) {
			return paramValidation
		}

		const Schema = Joi.object({
			name: Joi.string()
				.required(),
			birthday: Joi.date()
				.required(),
			deadday: Joi.date()
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

	validateCastDelete(req) {
		const ParamSchema = Joi.object({
			id: Joi.number()
				.required()
				.external(checkCastById)
		})

		return this.validateParamAsync(ParamSchema, req);
	}

}

module.exports = new castValidator();