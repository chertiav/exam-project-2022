const { userService } = require('./service');
const { UserAppDto } = require('../dtos/UserDto');
const { sequelize } = require('../db/models');
const { deleteFile } = require('../utils/functions');

module.exports.updateUser = async (req, res, next) => {
	const t = await sequelize.transaction();
	try {
		if (req.file) {
			req.body.avatar = req.file.filename;
			req.body.deleteAvatar && deleteFile(req.body.deleteAvatar);
		}
		if (req.body.deleteAvatar && !req.file) {
			req.body.avatar = 'anon.png';
			deleteFile(req.body.deleteAvatar);
		}
		const { body, tokenData: { userId } } = req;
		const updatedUser = await userService.updateUser(body, { id: userId }, t);
		const { ...userData } = new UserAppDto(updatedUser);
		res.send(userData);
		t.commit();
	} catch (err) {
		t.rollback();
		next(err);
	}
};
