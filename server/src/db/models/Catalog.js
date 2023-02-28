const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Catalog extends Model {
		static associate({ User, Conversation }) {
			this.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });
			this.belongsTo(Conversation, { foreignKey: 'chats', targetKey: 'id' });
		}
	}
	Catalog.init({
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		chats: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		catalogName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	}, {
		sequelize,
		tablelName: 'Catalogs',
	});
	return Catalog;
};
