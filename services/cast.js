const moment = require("moment");
const { Op } = require('sequelize');

const { Cast } = require('../factories/sequelize').models;

class castServices {

	async getCast() {
		return Cast.findAll().then(data => data).catch(err => {throw err})
	}

	async store(requestData) {

		return Cast.create({
			name: requestData.name,
			birthday: requestData.birthday,
			deadday: requestData.deadday,
			rating: requestData.rating
		});

	}

	async update(castId, requestData) {

		const updatedData = {
			name: requestData.name,
			birthday: requestData.birthday,
			deadday: requestData.deadday,
			rating: requestData.rating
		}

		return Cast.update(updatedData,{
			where: {
				id: castId
			}
		}).then(data => data)
			.catch((err) => {
				throw err;
			})

	}

	async delete(castId) {

		return Cast.destroy({
			where: {
				id: castId
			}
		}).then(data => data)
			.catch((err) => {
				throw err;
			})

	}

}

module.exports = new castServices();