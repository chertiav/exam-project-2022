const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Message extends Model {
		static associate({ User, Conversation }) {
			this.belongsTo(User, { foreignKey: 'sender', sourceKey: 'id' });
			this.belongsTo(Conversation, { foreignKey: 'conversation', sourceKey: 'id' });
		}
	}
	Message.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER,
		},
		sender: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		conversation: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		body: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		createdAt: {
			allowNull: true,
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
	}, {
		sequelize,
		tablelName: 'Messages',
	});
	return Message;
};
