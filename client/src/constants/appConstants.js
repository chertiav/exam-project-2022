const env = process.env.NODE_ENV || 'development';
const serverIP = 'localhost';
const serverPort = 5000;

export const APP_CONSTANTS = {
	ACCESS_TOKEN: 'accessToken',
	PATH_NOTN_FOUND: "/not-found",
	STATIC_IMAGES_PATH: '/staticImages/',
	ANONYM_IMAGE_PATH: '/staticImages/anonym.png',
	ANONYM_LOGO_PATH: '/staticImages/no_photo.jpg',
	BASE_URL: `http://${serverIP}:${serverPort}/api/`,
	PUBLIC_URL: env === 'production'
		? `http://${serverIP}:80/images/`
		: `http://${serverIP}:${serverPort}/public/images/`,
	CUSTOMER: 'customer',
	CREATOR: 'creator',
	MODERATOR: 'moderator',
	NAME_CONTEST: 'name',
	LOGO_CONTEST: 'logo',
	TAGLINE_CONTEST: 'tagline',
	CONTEST_STATUS_ACTIVE: 'active',
	CONTEST_STATUS_FINISHED: 'finished',
	CONTEST_STATUS_PENDING: 'pending',
	OFFER_STATUS_REJECTED: 'rejected',
	OFFER_STATUS_WON: 'won',
	OFFER_STATUS_PENDING: 'pending',
	OFFER_STATUS_ACTIVE: 'active',
};
