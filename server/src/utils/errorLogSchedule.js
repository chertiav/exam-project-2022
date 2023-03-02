const CronJob = require('cron').CronJob;
const fs = require('fs');
const path = require('path');
//======================================
const CONSTANTS = require('../constants');

module.exports.job = new CronJob(
	'59 59 23 * * *',
	function () {
		const logFilePath = path.join(__dirname, '../', CONSTANTS.STATIC_PATH_LOG_FILE);
		const logFileNamePath = path.join(logFilePath, CONSTANTS.STATIC_NAME_LOG_FILE);
		const logFilePathCurrentDay = path.join(logFilePath, CONSTANTS.STATIC_PATH_LOG_FILE_CURRENT_DAY);
		if (!fs.existsSync(logFilePathCurrentDay)) {
			fs.mkdirSync(logFilePathCurrentDay, {
				recursive: true,
			});
		}
		fs.readFile(logFileNamePath, (err, data) => {
			if (err) {
				console.log(`Error: ${err.message}`);
				return;
			}
			const date = new Date().getTime();
			const file = path.join(logFilePathCurrentDay, `${date}.log`);
			const buffer = data.toString('utf-8');
			const arrayData = buffer.split('\n');
			arrayData
				.filter(item => item !== '')
				.forEach(item => {
					console.log(item);
					const end = item.indexOf('stackTrace');
					const str = item.slice(0, end - 2);
					fs.appendFile(file, str + '}\n', (err) => {
						if (err) {
							console.log(`Error: ${err.message}`);
							return;
						}
					});
				});
			fs.truncate(logFileNamePath, (err) => {
				if (err) {
					console.log(`Error: ${err.message}`);
					return;
				}
			});
		});
	},
	null,
	false,
	'Europe/Kyiv',
);
