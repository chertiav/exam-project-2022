module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Messages', {
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
			conversId: {
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
