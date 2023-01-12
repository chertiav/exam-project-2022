class UserDto {
	constructor(model) {
		this.firstName = model.firstName;
		this.lastName = model.lastName;
		this.displayName = model.displayName;
		this.email = model.email;
	}
}
module.exports.UserChatDto = class UserChatDto extends UserDto {
	constructor(model) {
		super(model);
		this.id = model.id;
		this.avatar = model.avatar;
	}
};
module.exports.UserInterlocutorChatDto = class UserInterlocutorChatDto extends UserDto {
	constructor(model) {
		super(model);
		this.id = model.userId;
		this.avatar = model.avatar;
	}
};
module.exports.UserRegisterDto = class UserRegisterDto extends UserDto {
	constructor(model) {
		super(model);
		this.role = model.role;
		this.password = model.hashPass;
	}
};
module.exports.UserTokenDto = class UserTokenDto extends UserDto {
	constructor(model) {
		super(model);
		this.userId = model.id;
		this.role = model.role;
		this.avatar = model.avatar;
		this.rating = model.rating;
	}
};
module.exports.UserAppDto = class UserAppDto extends UserDto {
	constructor(model) {
		super(model);
		this.id = model.id;
		this.role = model.role;
		this.avatar = model.avatar;
		this.balance = model.balance;
	}
};
