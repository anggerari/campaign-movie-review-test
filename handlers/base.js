class BaseValidator {
	successResponse(res, message = 'Success', data = null, statusCode = 200) {
		return res.status(statusCode)
			.send({
				status_code: statusCode,
				message: message,
				data: data
			})
	}

	badRequest(res, message = 'Bad Request', data = null) {
		const statusCode = 400
		return res.status(statusCode)
			.send({
				status_code: statusCode,
				message: message,
				data: data
			})
	}

	forbidden(res, message = 'Forbidden') {
		const statusCode = 403
		return res.status(statusCode)
			.send({
				status_code: statusCode,
				message: message
			})
	}

	internalErrorResponse(res, message, error) {
		const statusCode = 500
		return res.status(statusCode)
			.send({
				status_code: statusCode,
				message: message,
				error: process.env.DEBUG === 'true' ? error.stack : 'error stack can be showed'
			})
	}

	unprocessableEntityResponse(res, message, validation) {
		const statusCode = 422
		return res.status(statusCode)
			.send({
				status_code: statusCode,
				message: message,
				data: validation
			})
	}
}

module.exports = BaseValidator
