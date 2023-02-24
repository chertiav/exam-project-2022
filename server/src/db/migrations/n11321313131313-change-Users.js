const replaceEnum = require('sequelize-replace-enum-postgres').default;

module.exports = {
	async up(queryInterface, Sequelize) {
		await replaceEnum({
			queryInterface,
			tableName: 'Users',
			columnName: 'role',
			newValues: ['customer', 'creator', 'moderator'],
			enumName: 'enum_Users_role',
		});
	},
	async down(queryInterface, Sequelize) {
		await replaceEnum({
			queryInterface,
			tableName: 'Users',
			columnName: 'role',
			newValues: ['customer', 'creator'],
			enumName: 'enum_Users_role',
		});
	},
};
