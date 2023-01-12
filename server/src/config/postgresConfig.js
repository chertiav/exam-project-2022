require('dotenv').config();
module.exports = {
	development: {
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DB,
		// host: 'db-dev',
		host: 'localhost',
		dialect: 'postgres',
		operatorsAliases: 'Op',
		seederStorage: 'sequelize',
		define: {
			timestamps: false,
		},
	},
	test: {
		username: 'postgres',
		password: 'admin',
		database: 'squadhelp-test',
		host: 'localhost',
		dialect: 'postgres',
		operatorsAliases: 'Op',
		seederStorage: 'sequelize',
	},
	production: {
		username: 'postgres',
		password: 'admin',
		database: 'squadhelp-prod',
		host: 'localhost',
		dialect: 'postgres',
		operatorsAliases: 'Op',
		seederStorage: 'sequelize',
	},
};
