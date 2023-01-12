import { APP_CONSTANTS } from './appConstants';

export const HEADER_CONSTANTS = {
	CONTACTS: {
		TEL: '(877) 355-3585',
		EMAIL: 'test@gmail.com'
	},
	FIXED_HEADER: {
		text: 'Squadhelp recognized as one of the Most Innovative Companies by Inc Magazine.',
		textLink: 'Read Announcement'
	},
	MENU_ITEMS: [
		{
			title: 'NAME IDEAS',
			items: [
				{ title: 'Beayty', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Consulting', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'E-commerce', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Fashion & Clothing', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Finance', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Real Estate', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Tech', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
			],
			last: { title: 'More Categories', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND }
		},
		{
			title: 'CONTESTS',
			items: [
				{ title: 'How it Works', linkPage: '/how-it-works' },
				{ title: 'Pricing', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Agency Service', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Active Contests', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Winners', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Leaderboard', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
			],
			last: { title: 'Become a Creative', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
		},
		{
			title: 'OUR WORK',
			items: [
				{ title: 'Names', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Taglines', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Logos', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
			],
			last: { title: 'Testimonials', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
		},
		{
			title: 'NAMES FOR SALE',
			items: [
				{ title: 'Popular Names', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Short Names', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Intriguing Names', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Names by Category', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'TeVisual Name Searchstimonials', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
			],
			last: { title: 'Sell Your Domains', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
		},
		{
			title: 'BLOG',
			items: [
				{ title: 'Ultimate Naming Guide', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Poetic Devices in Business Naming', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Crowded Bar Theory', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
			],
			last: { title: 'All Articles', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
		},
	],
	MENU_USER_INFO: {
		mainElementMenu: [
			{ title: 'View Dashboard', linkPage: '/dashboard' },
			{ title: 'My Account', linkPage: '/account' },
			{ title: 'Messages', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
			{ title: 'Affiliate Dashboard', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
		],
		lastElementMenu: 'Logout',
	}
}