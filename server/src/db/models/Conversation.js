const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Conversation extends Model {
		static associate({ Catalog, Message }) {
			this.hasMany(Catalog, { foreignKey: 'chats', targetKey: 'id' });
			this.hasMany(Message, { foreignKey: 'conversation', targetKey: 'id' });
		}
	}
	Conversation.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER,
		},
		participants: {
			allowNull: false,
			type: DataTypes.ARRAY(DataTypes.INTEGER),
		},
		blackList: {
			allowNull: false,
			type: DataTypes.ARRAY(DataTypes.BOOLEAN),
		},
		favoriteList: {
			allowNull: false,
			type: DataTypes.ARRAY(DataTypes.BOOLEAN),
		},
	}, {
		sequelize,
		tablelName: 'Conversations',
	});
	return Conversation;
};
