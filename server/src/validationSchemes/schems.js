const Yup = require('yup');

module.exports.registrationSchem = Yup.object().shape({
	firstName: Yup.string().required().min(1),
	lastName: Yup.string().required().min(1),
	displayName: Yup.string().required().min(1),
	email: Yup.string().email().required().min(4),
	password: Yup.string().required().min(1),
	role: Yup.string().matches(/(customer|creator|moderator)/).required(),
});

module.exports.loginSchem = Yup.object().shape({
	email: Yup.string().email().required().min(4),
	password: Yup.string().required().min(1),
});

module.exports.contestSchem = Yup.object().shape({
	contestType: Yup.string().matches(/(name|logo|tagline)/).required(),
	fileName: Yup.string().min(1),
	originalFileName: Yup.string().min(1),
	title: Yup.string().required().min(1),
	typeOfName: Yup.string().min(1),
	industry: Yup.string().required().min(1),
	focusOfWork: Yup.string().required().min(1),
	targetCustomer: Yup.string().required().min(1),
	styleName: Yup.string().min(1),
	nameVenture: Yup.string().min(1),
	typeOfTagline: Yup.string().min(1),
	brandStyle: Yup.string().min(1),
});

module.exports.paginationSchem = Yup.object().shape({
	limit: Yup.number().min(1).max(8).required(),
	offset: Yup.number().required(),
});


