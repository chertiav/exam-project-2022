module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Messages', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			sender: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Users',
					key: 'id',
				},
			},
			conversation: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Conversations',
					key: 'id',
				},
			},
			body: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			createdAt: {
				allowNull: true,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
			},
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Messages');
	},
};
