import { APP_CONSTANTS } from './appConstants';

export const HOW_IT_WORKS_CONSTANTS = {
	HOW_DOES_WORK_BLOCK: {
		title: 'How Does Squadhelp Work?',
		text: 'Squadhelp helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.',
		buttonData: {
			title: 'Play Video',
			link: 'https://vimeo.com/368584367'
		}
	},
	OUR_SERVICES_BLOCK: {
		titleButtonDecorate: `Our Services`,
		title: '3 Ways To Use Squadhelp',
		text: 'Squadhelp offers 3 ways to get you a perfect name for your business.',
		cards: [
			{
				image: 'icons/icon-7.svg',
				alt: 'icon-7',
				titleBlock: 'Launch a Contest',
				textBlock: 'Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.',
				titleButton: 'Launch a Contest',
				linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
			},
			{
				image: 'icons/icon-40.svg',
				alt: 'icon-40',
				titleBlock: 'Explore Names For Sale',
				textBlock: 'Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design',
				titleButton: 'Explore Names For Sale',
				linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
			},
			{
				image: 'icons/icon-24.svg',
				alt: 'icon-24',
				titleBlock: 'Agency-level Managed Contests',
				textBlock: 'Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs',
				titleButton: 'Learn More',
				linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
			},
		]
	}
}