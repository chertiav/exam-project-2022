const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Message extends Model {
		static associate({ User, Conversation }) {
			this.belongsTo(User, { foreignKey: 'userId', sourceKey: 'id' });
			this.belongsTo(Conversation, { foreignKey: 'conversId', sourceKey: 'id' });
		}
	}
	Message.init({
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER,
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		conversId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		body: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		createdAt: {
			allowNull: true,
			type: DataTypes.STRING,
			defaultValue: DataTypes.NOW,
		},
	}, {
		sequelize,
		tablelName: 'Messages',
	});
	return Message;
};
