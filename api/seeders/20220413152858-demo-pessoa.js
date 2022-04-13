'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('pessoas', [{
      nome: 'Bezao',
      ativo: true,
      email: 'bezao@gmail',
      role: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'pedim',
      ativo: true,
      email: 'pedroo@gmail',
      role: 'docente',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {

  }
};
