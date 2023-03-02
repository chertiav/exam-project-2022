module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Conversations', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			participants: {
				allowNull: false,
				type: Sequelize.ARRAY(Sequelize.INTEGER),
			},
			blackList: {
				allowNull: false,
				type: Sequelize.ARRAY(Sequelize.BOOLEAN),
			},
			favoriteList: {
				allowNull: false,
				type: Sequelize.ARRAY(Sequelize.BOOLEAN),
			},
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Conversations');
	},
};
