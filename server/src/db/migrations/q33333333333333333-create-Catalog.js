module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Catalogs', {
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				references: {
					model: 'Users',
					key: 'id',
				},
			},
			chats: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				references: {
					model: 'Conversations',
					key: 'id',
				},
			},
			catalogName: {
				type: Sequelize.STRING,
				allowNull: true,
			},
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Catalogs');
	},
};
