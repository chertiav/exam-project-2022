import axios from 'axios';
//=====================================
import history from '../browserHistory';
import * as CONSTANTS from '../constants';

const instance = axios.create({
	baseURL: CONSTANTS.APP_CONSTANTS.BASE_URL,
});

instance.interceptors.request.use((config) => {
	const token = window.localStorage.getItem(CONSTANTS.APP_CONSTANTS.ACCESS_TOKEN);
	if (token) {
		config.headers = { ...config.headers, Authorization: token };
	}
	return config;
}, (error) => Promise.reject(error));

instance.interceptors.response.use(
	(response) => {
		if (response.data.token) {
			window.localStorage.setItem(CONSTANTS.APP_CONSTANTS.ACCESS_TOKEN, response.data.token);
		}
		return response;
	}, (error) => {
		if (error.response.status === 401 && window.localStorage.getItem(CONSTANTS.APP_CONSTANTS.ACCESS_TOKEN)) {
			window.localStorage.removeItem(CONSTANTS.APP_CONSTANTS.ACCESS_TOKEN)
			history.replace('/login');
		}
		return Promise.reject(error)
	});

export default instance;
