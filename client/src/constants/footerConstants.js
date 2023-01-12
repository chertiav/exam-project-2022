import { HEADER_CONSTANTS } from './headerConstants'

const nameStartPrice = 199;
const logoStartPrice = 299;
export const FOOTER_CONSTANTS = {
	FOOTER_ITEMS: [
		{
			title: 'SQUADHELP',
			items: [
				'About',
				'Contact',
				'How It Works?',
				'Testimonials',
				'Our Work',
			],
		},
		{
			title: 'RESOURCES',
			items: [
				'How It Works',
				'Become a Creative',
				'Business Name Generator',
				'Discussion Forum',
				'Blog',
				'Download eBook',
				'Pricing',
				'Help & FAQs',
			],
		},
		{
			title: 'OUR SERVICES',
			items: [
				'Naming',
				'Logo Design',
				'Taglines',
				'Premium Names For Sale',
				'Creative Owned Names For Sale',
				'Audience Testing',
				'Trademark Research & Filling',
				'Managed Agency Service',
			],
		},
		{
			title: 'LEGAL',
			items: [
				'Terms of Service',
				'Privacy Policy',
				'Cookie Policy',
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
}