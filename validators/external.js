const {ValidationError, func} = require("joi");

const {
	Movie,
	MovieCast,
	Cast
} = require('../factories/sequelize').models

function generateValidationError(message, type, ctx) {
	// console.log(ctx)
	return new ValidationError(message, [{
		message: message,
		type: type,
		context: {
			...ctx
		}
	}]);
}

async function checkMovieById(id, ctx) {
	return Movie.findOne({
		attributes: ['id'],
		where: {
			id: id
		}
	}).then(result => {
		if (!result) {
			throw generateValidationError(`Movie not found`, 'any.not_exist', ctx)
		}
	})
}

async function checkCastById(id, ctx) {
	return Cast.findOne({
		attributes: ['id'],
		where: {
			id: id
		}
	}).then(result => {
		if (!result) {
			throw generateValidationError(`Cast not found`, 'any.not_exist', ctx)
		}
	})
}

async function checkMovieCastById(id, ctx) {
	return MovieCast.findOne({
		attributes: ['id'],
		where: {
			id: id
		}
	}).then(result => {
		if (!result) {
			throw generateValidationError(`Movie Cast not found`, 'any.not_exist', ctx)
		}
	})
}

module.exports = {
	checkMovieById,
	checkCastById,
	checkMovieCastById
}
