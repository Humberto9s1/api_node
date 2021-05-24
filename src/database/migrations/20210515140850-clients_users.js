module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('clients_users', {
    id: {
      type: Sequelize.INTEGER,
      allouNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allouNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allouNull: false,
      unique: true,
    },
    phone_whats: {
      type: Sequelize.STRING,
      allouNull: false,
    },
    password_hash: {
      type: Sequelize.STRING,
      allouNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allouNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allouNull: false,
    },
  }),
  down: async (queryInterface) => queryInterface.dropTable('clients_users'),
};
