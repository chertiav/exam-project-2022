require('dotenv').config();
const fs = require('fs');
const path = require('path');
//======================================
const CONSTANTS = require('../constants');

module.exports.loggingError = (error) => {

	const filePath = path.join(__dirname, '../', CONSTANTS.STATIC_PATH_LOG_FILE);
	const fileNamePath = path.join(filePath, CONSTANTS.STATIC_NAME_LOG_FILE);

	const objectError = {
		message: error.message,
		time: new Date().getTime(),
		code: error?.code ?? error.status,
		stackTrace: { stack: error.stack },
	};
	const jsonObjectError = JSON.stringify(objectError);

	if (!fs.existsSync(filePath)) {
		fs.mkdirSync(filePath, {
			recursive: true,
		});
	}

	fs.appendFile(fileNamePath, jsonObjectError + '\n', (err) => {
		if (err) {
			console.log(`Error: ${err.message}`);
			return;
		}
	});
};
