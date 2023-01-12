const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class SelectBox extends Model {
		static associate() {
		}
	}
	SelectBox.init({
		type: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.STRING,
		},
		describe: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.STRING,
		},
	}, {
		sequelize,
		modelName: 'Select',
		tablelName: 'Selects',
	});
	return SelectBox;
};
