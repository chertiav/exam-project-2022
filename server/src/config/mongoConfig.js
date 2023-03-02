require('dotenv').config();
module.exports = {
	development: {
		database: 'squadhelp-chat',
		host: process.env.MONGO_HOST,
		port: 27017,
	},
	production: {
		database: 'squadhelp-chat',
		host: 'localhost',
		port: 27017,
	},
};
