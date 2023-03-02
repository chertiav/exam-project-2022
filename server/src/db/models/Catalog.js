const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Catalog extends Model {
		static associate({ User }) {
			this.belongsTo(User, { foreignKey: 'userId', sourceKey: 'id' });
		}
	}
	Catalog.init({
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
		catalogName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		chats: {
			allowNull: false,
			type: DataTypes.ARRAY(DataTypes.INTEGER),
		},
	}, {
		sequelize,
		tablelName: 'Catalogs',
	});
	return Catalog;
};
