import * as CONSTANTS from '../constants';
import moment from 'moment';

const splitIntoWords = (word) => /(?=[A-Z])/g[Symbol.split](word).map(word => word
	.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()))
	.join(' ');

export const getInfoBlockValues = (values) => {
	const infoBlockValues = Object.keys(values).map(item => ({
		displayView: splitIntoWords(item),
		value: values[item],
		key: item
	}))
	return infoBlockValues
};

export const getInputField = (initialValues, type) => {
	return (
		Object.keys(initialValues)
			.map(inputField => {
				return {
					name: inputField,
					label: splitIntoWords(inputField),
					type,
				}
			})
	);
};

export const getAvar = (avatar) => avatar === 'anon.png'
	? CONSTANTS.APP_CONSTANTS.ANONYM_IMAGE_PATH
	: `${CONSTANTS.APP_CONSTANTS.PUBLIC_URL}${avatar}`;

export const getTimeStr = (createdAt) => {
	const diff = (moment.duration(moment().diff(moment(createdAt))));
	let str = '';
	if (diff._data.days !== 0) str = `${diff._data.days}d `;
	if (diff._data.hours !== 0) str += `${diff._data.hours}h`;
	if (str.length === 0) str = 'less than one hour';
	return str;
};

export const getTimeStrNewFormat = (time) => {
	const currentTime = moment();
	if (currentTime.isSame(time, 'day')) return moment(time).format('HH:mm');
	if (currentTime.isSame(time, 'week')) return moment(time).format('dddd');
	if (currentTime.isSame(time, 'year')) return moment(time).format('MM DD');
	return moment(time).format('MMMM DD, YYYY');
};

export const ucFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const getPredicateOfRequest = (creatorFilter) => {
	const obj = {};
	Object.keys(creatorFilter).forEach((item) => {
		if (creatorFilter[item]) {
			obj[item] = creatorFilter[item];
		}
	});
	obj.ownEntries = creatorFilter.ownEntries;
	return obj;
};

export const paramsToUrl = (creatorFilter) => {
	const obj = {};
	Object.keys(creatorFilter).forEach((element) => {
		if (creatorFilter[element]) obj[element] = creatorFilter[element];
	});
	return obj;
};
export const getBundle = (bundleStr) => {
	const array = bundleStr.toLowerCase().split('+');
	const bundleList = {};
	bundleList.first = array[0];
	array.forEach((_, i) => {
		bundleList[array[i]] = i === array.length - 1 ? 'payment' : array[i + 1];
	});
	return bundleList;
};

export const useAuth = () =>
	window.localStorage.getItem(CONSTANTS.APP_CONSTANTS.ACCESS_TOKEN)
		? true
		: false;
