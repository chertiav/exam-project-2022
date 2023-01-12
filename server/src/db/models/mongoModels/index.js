const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
//==================================================
const env = process.env.NODE_ENV || 'development';
const configPath = path.join(__dirname, '..', '..', '..', 'config/mongoConfig');
const config = require(configPath)[env];

const dbMongo = {};
const basename = path.basename(__filename);

const connectDB = async () => {
	try {
		await mongoose.connect(
			`mongodb://${config.host}:${config.port}/${config.database}`,
		);
		console.log(
			`Connection has been established successively to ${config.database}`,
		);
	} catch (error) {
		console.log(`Unable to connect to the database: ${error.message}`);
	}
};
connectDB();

fs.readdirSync(__dirname)
	.filter((fileName) => {
		return (
			fileName.indexOf('.') !== 0 &&
			fileName !== basename &&
			fileName.slice(-3) === '.js'
		);
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file));
		dbMongo[model.modelName] = model;
	});

mongoose.set('debug', env === 'development');
module.exports = mongoose;
