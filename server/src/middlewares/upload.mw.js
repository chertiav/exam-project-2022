const fs = require('fs');
const multer = require('multer');
const env = process.env.NODE_ENV || 'development';
const { static_path } = require('../config/config');

const filePath = env === 'production' ? '/var/www/html/images/' : static_path;

if (!fs.existsSync(filePath)) {
	fs.mkdirSync(filePath, {
		recursive: true,
	});
}
const storageContestFiles = multer.diskStorage({

	destination(req, file, cb) {
		cb(null, filePath);
	},
	filename(req, file, cb) {
		cb(null, Date.now() + file.originalname);
	},
});

const filterImage = (req, file, cb) => {
	const MIMTYPE_REGEXP = /^image\/(jpeg|jpeg|png|gif)$/;
	MIMTYPE_REGEXP.test(file.mimetype) ? cb(null, true) : cb(null, false);
};
const filterFile = (req, file, cb) => {
	const MIMTYPE_REGEXP = /^application\/(msword|vnd.openxmlformats-officedocument.wordprocessingml.document|vnd.ms-powerpoint|vnd.openxmlformats-officedocument.presentationml.presentation|pdf)$/;
	MIMTYPE_REGEXP.test(file.mimetype) ? cb(null, true) : cb(null, false);
};

module.exports.uploadAvatar = multer({
	storage: storageContestFiles,
	fileFilter: filterImage,
}).single('file');

module.exports.uploadContestFiles = multer({
	storage: storageContestFiles,
	fileFilter: filterFile,
}).array('files', 3);

module.exports.updateContestFile = multer({
	storage: storageContestFiles,
	fileFilter: filterFile,
}).single('file');

module.exports.uploadLogoFiles = multer({
	storage: storageContestFiles,
	fileFilter: filterImage,
}).single('file');
