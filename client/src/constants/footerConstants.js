import { HEADER_CONSTANTS } from './headerConstants'
import { APP_CONSTANTS } from './appConstants'

const nameStartPrice = 199;
const logoStartPrice = 299;
export const FOOTER_CONSTANTS = {
	FOOTER_ITEMS: [
		{
			title: 'SQUADHELP',
			items: [
				{ title: 'About', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Contact', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'How It Works', linkPage: '/how-it-works' },
				{ title: 'Testimonials', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Our Work', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
			],
		},
		{
			title: 'RESOURCES',
			items: [
				{ title: 'How It Works', linkPage: '/how-it-works' },
				{ title: 'Become a Creative', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Business Name Generator', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Discussion Forum', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Blog', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Download eBook', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Pricing', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Help & FAQs', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
			],
		},
		{
			title: 'OUR SERVICES',
			items: [
				{ title: 'Naming', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Logo Design', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Taglines', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Premium Names For Sale', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Creative Owned Names For Sale', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Audience Testing', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Trademark Research & Filling', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Managed Agency Service', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
			],
		},
		{
			title: 'LEGAL',
			items: [
				{ title: 'Terms of Service', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Privacy Policy', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
				{ title: 'Cookie Policy', linkPage: APP_CONSTANTS.PATH_NOTN_FOUND },
			],
		},
	],
	FOOTER_REGISTRATION_ITEMS: [
		[
			{
				title: 'Why should I use Squadhelp?',
				text: 'You always have an option of hiring a consultant or coming up with the name yourself. However, Squadhelp builds great brands that succeed faster by connecting you with the most creative people across the globe. Most importantly, Squadhelp provides you with choice: you get to see ideas from dozens (in some cases, hundreds) of contestants before you select a winner. Typically, you would spend far less money with Squadhelp (our contests start at $199) than hiring an agency. Also, you will receive immediate results - most contests begin receiving submissions within minutes of starting.',
			},
			{
				title: 'How is Squadhelp Different?',
				text: 'Since 2011, we have been committed to disrupting the traditional agency model. Our platform offers much more than a typical crowdsourcing experience. From Machine Learning to Audience Testing to Comprehensive Trademark Validation, you receive best-in-class support for your branding projects. Breadth: Our Contest-Based Crowdsourcing approach allows you to receive an unmatched breadth of name ideas from dozens of unique, creative minds while working with the world’s largest branding community. Quality and Collaboration: Using an advanced Quality Scoring Algorithm, we ensure that you receive more ideas from our top-quality creatives, and we use Gamification best practices to encourage high-quality brainstorming and two-way communication throughout your contest. We don’t stop at ideation: Choose your name with confidence through our high-end validation services. Poll your target demographics to get unbiased feedback on your favorite names, and receive Trademark Risk and Linguistics Analysis Reports developed by a Licensed Trademark Attorney.',
			}
		],
		[
			{
				title: 'I’ve never used Squadhelp before. What should I expect?',
				text: 'Most customers tell us that Squadhelp’s process is effective, easy,fast, and even fun. We constantly hear extremely positive feedback with respect to the breadth of ideas submitted to each contest, and many customers are surprised at how insightful working with dozens of creative individuals from across the globe can be.',
			},
			{
				title: 'How much does it cost?',
				text: `Our naming competitions start at ${`$` + nameStartPrice}, and our logo design competitions start at ${`$` + logoStartPrice}. Also, there are three additional contest level that each offer more features and benefits.See our Pricing Page for details.`,
			},
			{
				title: 'Do you offer any discount for multiple contests?',
				text: 'Yes! We have many contest bundles - our most popular being our Name, Tagline, and Logo bundle. Bundles allow you to purchase multiple contests at one time and save as much as from $75 - $400. You can learn more about our bundle options on our Pricing Page.',
			},
			{
				title: 'Will you help me validate my name?',
				text: 'Yes! We believe that validating and securing your name is a critical part of your branding process. Squadhelp offers domain checks, Trademark support, linguistics analysis, and professional audience testing to help you choose your name with confidence. We even have special prices for Trademark filing for our customers.',
			},
			{
				lastTitle: 'I have other questions! How can I get in touch with Squadhelp?',
				text: [
					{
						text: 'Check out our ',
						highlightedWord: 'FAQs'
					},
					{
						text: ' or send us a ',
						highlightedWord: 'message'
					},
					{
						text: `. For assistance with launching a contest, you can also call us at ${HEADER_CONSTANTS.CONTACTS.TEL} or schedule a `,
						highlightedWord: 'Branding Consultation'
					},
				],
			},
		]
	],
	LINKS_GREY_FOOTER: {
		linksGroup: [
			{
				titleGroup: 'Services',
				itemsGroup: [
					{ title: 'Premium Domains For Sale', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Crowdsource Naming', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Naming Agency', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Brandable Domains', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{
						title: 'Short Domains', link: APP_CONSTANTS.PATH_NOTN_FOUND,
						items: [
							{ title: '3 Letter Domains', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
							{ title: '4 Letter Domains', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
							{ title: '5 Letter Domains', link: APP_CONSTANTS.PATH_NOTN_FOUND, },
						],
					},
					{ title: 'One Word Domains', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Industry Domains', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Agency Services', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Logo Contests', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Tagline Contests', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Trademark Filing Service', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Audience Test', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				],
			},
			{
				titleGroup: 'Tools',
				itemsGroup: [
					{ title: 'Business Name Generator', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'How to Name Your Business', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Free Trademark Checker', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Branding Blog', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Business Naming eBook', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Startup Toolkit', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				],
			},
			{
				titleGroup: 'SquadHelp',
				itemsGroup: [
					{ title: 'About', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Contact', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'How It Works', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Testimonials', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Our Work', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					{ title: 'Help & FAQs', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
				],
			},
			[
				{
					titleGroup: 'Creatives',
					itemsGroup: [
						{ title: 'Get Started', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
						{ title: 'Help & FAQs', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
						{ title: 'Domain Selling Info', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
						{ title: 'Discussion Forum', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					],
				},
				{
					titleGroup: 'Legal',
					itemsGroup: [
						{ title: 'Terms of Service', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
						{ title: 'Privacy Policy', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
						{ title: 'Cookie Policy', link: APP_CONSTANTS.PATH_NOTN_FOUND, items: [], },
					],
				},
			]
		],
		searchesBlock: {
			title: 'Trending Searches',
			text: 'Explore our unique, hand-picked brand & business names for sale along with a matching, premium domain name. Buy instantly for a fixed low price.',
			searchTerms: [
				{
					title: 'Short Names',
					linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
				},
				{
					title: 'One Wors',
					linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
				},
				{
					title: '4-letter',
					linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
				},
				{
					title: '5-letter',
					linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
				},
			],
		},
		socialContact: {
			year: 'Copyright © 2022 Squadhelp Inc',
			address: {
				linkTo: 'https://www.shopperapproved.com/reviews/squadhelp.com/',
				textStart: 'Squadhelp.com has a Shopper Approved rating of ',
				textEnd: '4.9/5 based on 2782 ratings and reviews',
			},
			social: [
				{ icons: 'icons8-linkedin-2.svg', linkTo: 'https://www.linkedin.com/company/squadhelp/' },
				{ icons: 'icons8-instagram.svg', linkTo: 'https://www.instagram.com/squadhelpinc/' },
				{ icons: 'icons8-twitter.svg', linkTo: 'https://twitter.com/squadhelp' },
				{ icons: 'icons8-facebook.svg', linkTo: 'https://www.facebook.com/squadhelpinc' },
			]
		}
	},
}