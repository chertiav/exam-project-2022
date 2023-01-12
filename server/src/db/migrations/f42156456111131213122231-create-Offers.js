module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Offers', {
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
			contestId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Contests',
					key: 'id',
				},
			},
			text: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			fileName: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			originalFileName: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			status: {
				type: Sequelize.STRING,
				allowNull: true,
				defaultValue: 'pending',
			},
		});
	},
	async down(queryInterface) {
		await queryInterface.dropTable('Offers');
	},
};
