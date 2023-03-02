module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Catalogs', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Users',
					key: 'id',
				},
			},
			catalogName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			chats: {
				allowNull: false,
				type: Sequelize.ARRAY(Sequelize.INTEGER),
			},
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Catalogs');
	},
};
