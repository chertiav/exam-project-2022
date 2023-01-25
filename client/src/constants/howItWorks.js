import { APP_CONSTANTS } from './appConstants';

export const HOW_IT_WORKS_CONSTANTS = {
	HOW_DOES_WORK_BLOCK: {
		titleButtonDecorate: `World's #1 Naming Platform`,
		title: 'How Does Squadhelp Work?',
		text: 'Squadhelp helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.',
		buttonData: {
			title: 'Play Video',
			link: 'https://vimeo.com/368584367'
		},
		image: {
			title: 'app-user.svg',
			alt: 'app-user',
		},
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
	},
	HOW_CONTEST_WORK: {
		title: 'How Do Naming Contests Work?',
		icon: {
			title: 'icons/icon-27.svg',
			alt: 'icon-41',
		},
		image: {
			title: 'support-man.svg',
			alt: 'support-man',
		},
		steps: [
			'Fill out your Naming Brief and begin receiving name ideas in minutes',
			'Rate the submissions and provide feedback to creatives.Creatives submit even more names based on your feedback.',
			'Our team helps you test your favorite names with your target audience. We also assist with Trademark screening.',
			'Pick a Winner. The winner gets paid for their submission.',
		]
	}
}