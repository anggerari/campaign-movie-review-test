class BaseValidator {
	constructor() {

	}

	/**
	 *
	 * @param Schema
	 * @param request
	 * @returns {{data, success: boolean}|{success: boolean, message, error: any}}
	 */
	validateParam(Schema, request) {
		const validate = Schema.validate(request.params);
		if (validate.error) {
			return {
				success: false,
				message: validate.error.message,
				error: validate.error.details
			};
		}

		return {
			success: true,
			data: validate.value
		};
	}

	/**
	 *
	 * @param Schema
	 * @param request
	 * @returns {{data, success: boolean}|{success: boolean, message, error: any}}
	 */
	async validateParamAsync(Schema, request) {
		return Schema.validateAsync(request.params)
			.then(validate => {
				return {
					success: true,
					data: validate
				};
			})
			.catch(error => {
				return {
					success: false,
					message: error.message,
					error: error.details
				}
			})
	}

	/**
	 *
	 * @param Schema
	 * @param request
	 * @returns {{data, success: boolean}|{success: boolean, message, error: any}}
	 */
	validateQuery(Schema, request) {
		const validate = Schema.validate(request.query);
		if (validate.error) {
			return {
				success: false,
				message: validate.error.message,
				error: validate.error.details
			};
		}

		return {
			success: true,
			data: validate
		};
	}

	/**
	 *
	 * @param Schema
	 * @param request
	 * @returns {{data, success: boolean}|{success: boolean, message, error: any}}
	 */
	validateQueryAsync(Schema, request) {
		return Schema.validateAsync(request.query)
			.then((validate) => {
				return {
					success: true,
					data: validate
				};
			}).catch(error => {
				return {
					success: false,
					message: error.message,
					error: error.details
				}
			})
	}

	/**
	 *
	 * @param Schema
	 * @param request
	 * @param files
	 * @param allowUnknown
	 * @returns {{data, success: boolean}|{success: boolean, message, error: any}}
	 */
	validateBody(Schema, request, files = undefined, allowUnknown = false) {
		const validate = Schema.validate(request.body, {
			allowUnknown: allowUnknown
		});
		if (validate.error) {
			return {
				success: false,
				message: validate.error.message,
				error: validate.error.details
			};
		}

		if (files) validate.value.files = files;

		return {
			success: true,
			data: validate.value
		};
	}

	/**
	 *
	 * @param Schema
	 * @param request
	 * @param files
	 * @param allowUnknown
	 * @returns {Promise<{success: boolean, message, error: (*|string)}|{data: any, success: boolean}|{success: boolean, message, error: any}>}
	 */
	async validateBodyAsync(Schema, request, files = undefined, allowUnknown = false) {
		try {
			const validate = await Schema.validateAsync(request.body, {
				allowUnknown: allowUnknown
			});
			if (validate.error) {
				return {
					success: false,
					message: validate.error.message,
					error: validate.error.details
				};
			}

			if (files) validate.files = files;

			return {
				success: true,
				data: validate
			};
		} catch (e) {
			return {
				success: false,
				message: e.message,
				error: e.details ? (e.details[0] ? e.details[0] : '') : ''
			}
		}
	}
}

module.exports = BaseValidator;
