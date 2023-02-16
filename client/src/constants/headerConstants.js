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
	},
	MENU_ITEMS_BLUE_AUTH: {
		auth: {
			title: 'Quick Links',
			items: [
				{ title: 'My Dashboard', linkPage: '/dashboard' },
				{ title: 'My Account', linkPage: '/account' },
			],
		},
		isNotAuth: {
			title: 'Account',
			items: [
				{ title: 'Login', linkPage: '/login' },
				{ title: 'Signup', linkPage: '/registration' },
			],
		},
	},
	MENU_BOX_BLUE_HEADER: [
		{
			iconsTitle: 'FaPhoneAlt',
			titleGroup: 'Contact',
			items: [
				{ icons: 'FaPhoneAlt', title: '(877) 355-3585', link: 'tel:(877)355-3585' },
				{ icons: 'BsChatTextFill', title: 'Chat', link: '' },
				{ icons: 'TfiEmail', title: 'Email', link: 'mailto:service@squadhelp.com' },
				{ icons: 'ImSpinner4', title: 'Help Desk', link: 'https://helpdesk.squadhelp.com/' },
			],
		}
		, {
			iconsTitle: 'BsHeartFill',
			titleGroup: 'Favorites',
			linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
		}
	],
	MENU_HEADER_BLUE_BOTTOM: [
		{
			titleGroup: 'Names For Sale',
			linkPage: APP_CONSTANTS.PATH_NOTN_FOUND,
			itemsGroup: [
				{ title: 'Popular Brandable Names', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Premium Domains For Sale', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{
					title: 'Short Domains', link: APP_CONSTANTS.PATH_NOTN_FOUND,
					items: [
						{ title: '3 Letter Domains', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
						{ title: '4 Letter Domains', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
						{ title: '5 Letter Domains', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
					],
				},
				{ title: 'One Word Names', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Industry Domains', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Location Based Names', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Recommended For You', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Become A Seller', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
			],
		},
		{
			titleGroup: 'Naming Contests',
			linkPage: APP_CONSTANTS.PATH_NOTN_FOUND,
			itemsGroup: [
				{ title: 'Start A Contest', link: '/startContest', items: [], },
				{ title: 'How It Works', link: '/how-it-works', items: [], },
				{ title: 'Contest Pricing', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Agency Services', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Our Work', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Recent Winners', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Active Contests', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Become A Creative', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
			],
		},
		{
			titleGroup: 'Other Services',
			linkPage: APP_CONSTANTS.PATH_NOTN_FOUND,
			itemsGroup: [
				{ title: 'Logos', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Taglines', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Audience Testing', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Trademark Research', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Trademark Filing', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Video Creation', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
			],
		},
		{
			titleGroup: 'Agency Experience',
			linkPage: APP_CONSTANTS.PATH_NOTN_FOUND,
			itemsGroup: [],
		},
		{
			titleGroup: 'Resources',
			linkPage: APP_CONSTANTS.PATH_NOTN_FOUND,
			itemsGroup: [
				{ title: 'Business Name Generator', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'How to Naming Your Business', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{ title: 'Free Trademark Checker', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				{
					title: 'Industry Name Ideas', link: APP_CONSTANTS.PATH_NOTN_FOUND,
					items: [
						{ title: 'Clothing Brand Name Ideas', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
						{ title: 'Consulting Business Name Ideas', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
						{ title: 'Health & Wellness Business Name Ideas', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
						{ title: 'Brand Name ideas', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
						{ title: 'Beauty Business Names', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
						{ title: 'Startup Name Ideas', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
						{ title: 'Shopping Website Name Ideas', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
						{ title: 'Real Estate Business Name Ideas', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
						{ title: 'Insurance Business Name Ideas', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
						{ title: 'Finance Business Name Ideas', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
					],
				},
			],
		},
	],
}