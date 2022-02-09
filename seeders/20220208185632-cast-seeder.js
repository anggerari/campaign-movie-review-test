'use strict';
const moment = require("moment");

module.exports = {
  async up (queryInterface, Sequelize) {

    const castData = [
      {
        "name": "Robert Downey Jr.",
        "birthday": "2022-09-02",
        "rating": 5,
        "deadday": moment().format('YYYY-MM-DD HH:mm:ss'),
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Mark Rufallo",
        "birthday": "2022-02-02",
        "rating": 5,
        "deadday": moment().format('YYYY-MM-DD HH:mm:ss'),
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Chris Evan",
        "birthday": "2022-10-02",
        "rating": 5,
        "deadday": moment().format('YYYY-MM-DD HH:mm:ss'),
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Scarlett Johansson",
        "birthday": "2022-10-02",
        "rating": 4,
        "deadday": moment().format('YYYY-MM-DD HH:mm:ss'),
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Tom Hiddleston",
        "birthday": "2022-10-02",
        "rating": 4,
        "deadday": moment().format('YYYY-MM-DD HH:mm:ss'),
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Chris Hemsworth",
        "birthday": "2022-10-02",
        "rating": 5,
        "deadday": moment().format('YYYY-MM-DD HH:mm:ss'),
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        "name": "Chadwick Boseman",
        "birthday": "2022-10-02",
        "deadday": "2020-09-28",
        "rating": 5,
        "created_at": moment().format('YYYY-MM-DD HH:mm:ss'),
        "updated_at": moment().format('YYYY-MM-DD HH:mm:ss')
      },
    ];
    return queryInterface.bulkInsert('casts', castData);

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('casts', null, {});
  }
};
