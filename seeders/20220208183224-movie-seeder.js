'use strict';
const moment = require("moment");

module.exports = {
  async up (queryInterface, Sequelize) {

    const movieData = [
      {
        "name": "Iron Man",
        "language": "English",
        "status": "Ended",
        "rating": 5,
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "The Incredible Hulk",
        "language": "English",
        "status": "Ended",
        "rating": 4,
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Iron Man 2",
        "language": "English",
        "status": "Ended",
        "rating": 4,
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Thor",
        "language": "English",
        "status": "Ended",
        "rating": 3,
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Captain America: The First Avenger",
        "language": "English",
        "status": "Ended",
        "rating": 4,
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "The Avenger",
        "language": "English",
        "status": "Ended",
        "rating": 5,
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Iron Man 3",
        "language": "English",
        "status": "Ended",
        "rating": 5,
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Thor: The Dark World",
        "language": "English",
        "status": "Ended",
        "rating": 4,
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Captain America: The Winter Soldier",
        "language": "English",
        "status": "Ended",
        "rating": 5,
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Guardian Of The Galaxy",
        "language": "English",
        "status": "Ended",
        "rating": 4,
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Avenger: Age Of Ultron",
        "language": "English",
        "status": "Ended",
        "rating": 5,
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Ant-Man",
        "language": "English",
        "status": "Ended",
        "rating": 4,
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Captain America: Civil War",
        "language": "English",
        "status": "Ended",
        "rating": 4,
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
    ];
    return queryInterface.bulkInsert('movies', movieData);

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('movies', null, {});
  }
};
