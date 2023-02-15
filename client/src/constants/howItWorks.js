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
	},
	FAQ_TOPICS_BLOCK: [
		{
			title: 'Launching A Contest',
			link: 'contests',
			items: [
				{
					itemsTitle: 'How long does it take to start receiving submissions?', typeDescrioption: 1,
					descrioption: 'For Naming contests, you will start receiving your submissions within few minutes of launching your contest. Since our creatives are located across the globe, you can expect to receive submissions 24 X 7 throughout the duration of the brainstorming phase.',
				},
				{
					itemsTitle: 'How long do Naming Contests last?',
					typeDescrioption: 1,
					descrioption: 'You can choose a duration from 1 day to 7 days. We recommend a duration of 3 Days or 5 Days. This allows for sufficient time for entry submission as well as brainstorming with creatives. If you take advantage of our validation services such as Audience Testing and Trademark Research, both will be an additional 4-7 days (3-5 business days for Audience Testing and 1-2 business days for Trademark Research).',
				},
				{
					itemsTitle: 'Where are the creatives located?',
					typeDescrioption: 1,
					descrioption: 'About 70% of our Creatives are located in the United States and other English speaking countries (i.e. United Kingdom, Canada, and Australia.). We utilize an advanced rating score algorithm to ensure that high quality creatives receive more opportunities to participate in our contests.',
				},
				{
					itemsTitle: 'What if I do not like any submissions?', typeDescrioption: 2,
					descrioptionTitle: 'While it is unusually rare that you will not like any names provided, we have a few options in case this problem occurs:',
					descrioptionItems: [
						{
							itemTextStart: 'If the contest ends and you have not yet found a name that you’d like to move forward with, we can provide complimentary extension of your contest as well as a complimentary consultation with one of our branding consultants (a $99 value). ',
							linkWord: null,
							linkTo: null,
							itemTextEnd: '',
						},
						{
							itemTextStart: 'By exploring our premium domain marketplace you can apply the contest award towards the purchase of any name listed for sale. ',
							linkWord: null,
							linkTo: null,
							itemTextEnd: '',
						},
						{
							itemTextStart: 'If you choose the Gold package or Platinum package and keep the contest as "Not Guaranteed", you can request a partial refund if you choose not to move forward with any name from you project. (Please note that the refund is for the contest award). Here is a link to our ',
							linkWord: 'Refund Policy',
							linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
							itemTextEnd: '',
						},
					],
				},
				{
					itemsTitle: 'How much does it cost?',
					typeDescrioption: 3,
					itemTextStart: 'Our naming competitions start at $299, and our logo design competitions start at $299. Also, there are three additional contest level that each offer more features and benefits. See our ',
					linkWord: 'Pricing Page',
					linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
					itemTextEnd: ' for details',
				},
				{
					itemsTitle: 'I need both a Name and a Logo. Do you offer any discount for multiple contests?',
					typeDescrioption: 3,
					itemTextStart: 'Yes! We have many contest bundles - our most popular being our Name, Tagline, and Logo bundle. Bundles allow you to purchase multiple contests at one time and save as much as from $75 - $400. You can learn more about our bundle options on our ',
					linkWord: 'Pricing Page',
					linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
					itemTextEnd: '.',
				},
				{
					itemsTitle: 'What if I want to keep my business idea private?',
					typeDescrioption: 1,
					descrioption: 'You can select a Non Disclosure Agreement (NDA) option at the time of launching your competition. This will ensure that only those contestants who agree to the NDA will be able to read your project brief and participate in the contest. The contest details will be kept private from other users, as well as search engines.',
				},
				{
					itemsTitle: 'Can you serve customers outside the US?',
					typeDescrioption: 1,
					descrioption: 'Absolutely. Squadhelp services organizations across the globe. Our customer come from many countries, such as the United States, Australia, Canada, Europe, India, and MENA. We’ve helped more than 25,000 customer around the world.',
				},
				{
					itemsTitle: 'Can I see any examples?',
					typeDescrioption: 2,
					descrioptionTitle: 'Our creatives have submitted more than 6 Million names and thousands of logos on our platform. Here are some examples of Names, Taglines, and Logos that were submitted in recent contests.',
					descrioptionItems: [
						{
							itemTextStart: '',
							linkWord: 'Name Examples',
							linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
							itemTextEnd: '',
						},
						{
							itemTextStart: '',
							linkWord: 'Tagline Examples',
							linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
							itemTextEnd: '',
						},
						{
							itemTextStart: '',
							linkWord: 'Logo Examples',
							linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
							itemTextEnd: '',
						},
					],
				},
			],
		},
		{
			title: 'Buying From Marketplace',
			link: 'marketplace',
			items: [
				{
					itemsTitle: "What's included with a Domain Purchase?",
					typeDescrioption: 1,
					descrioption: 'When you purchase a domain from our premium domain marketplace, you will receive the exact match .com URL, a complimentary logo design (along with all source files), as well as a complimentary Trademark report and Audience Testing if you’re interested in validating your name.',
				},
				{
					itemsTitle: 'How does the Domain transfer process work?',
					typeDescrioption: 1,
					descrioption: 'Once you purchase a Domain, our transfer specialists will reach out to you (typically on the same business day). In most cases we can transfer the domain to your preferred registrar (such as GoDaddy). Once we confirm the transfer details with you, the transfers are typically initiated to your account within 1 business day.',
				},
				{
					itemsTitle: 'If I purchase a Domain on installments, can I start using it to setup my website?',
					typeDescrioption: 1,
					descrioption: 'We offer payment plans for many domains in our Marketplace. If you purchase a domain on a payment plan, we hold the domain in an Escrow account until it is fully paid off. However our team can assist you with making any changes to the domains (such as Nameserver changes), so that you can start using the domain right away after making your first installment payment.',
				},
			],
		},
		{
			title: 'Managed Contests',
			link: 'managed',
			items: [
				{
					itemsTitle: 'What are Managed Contests?',
					typeDescrioption: 4,
					itemsText: [
						{
							itemTextStart: "The 'Managed' option is a fully managed service by Squadhelp Branding experts. It includes a formal brief preparation by Squadhelp team and management of your contest. Managed Contests are a great fit for companies that are looking for an \"Agency\" like experience and they do not want to manage the contest directly."
						},
						{
							itemTextStart: "Our branding team has directly managed hundreds of branding projects and has learned several best practices that lead to successful project outcomes. Our team will apply all best practices towards the management of your branding project."
						},
						{
							itemTextStart: "Learn more about our ",
							linkWord: 'Managed Contest Service',
							linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
							itemTextEnd: ''
						},
					]

				},
				{
					itemsTitle: "What's a typical timeline for a Managed Contest?", typeDescrioption: 2,
					descrioptionTitle: 'The overall process takes 12-13 days.',
					descrioptionItems: [
						{
							itemTextStart: 'The Managed projects start with a project kick-off call with your Branding Consultant. You can schedule this call online immediately after making your payment.',
							linkWord: null,
							linkTo: null,
							itemTextEnd: '',
						},
						{
							itemTextStart: 'After your kick-off call, the Branding consultant will write your project brief and send for your approval within 1 business day.',
							linkWord: null,
							linkTo: null,
							itemTextEnd: '',
						},
						{
							itemTextStart: 'Upon your approval, the contest will go live. The branding consultant will help manage your project throughout the brainstorming phase (typically 5 days).',
							linkWord: null,
							linkTo: null,
							itemTextEnd: '',
						},
						{
							itemTextStart: 'Upon the completion of brainstorming phase, the branding consultant will work with you to test the top 6 names from your Shortlist (3-5 Days). In addition, the branding consultant will coordinate the detailed Trademark screening (1-3 days)',
							linkWord: null,
							linkTo: null,
							itemTextEnd: '',
						},
					],
				},
				{
					itemsTitle: 'How much do Managed Contests cost?',
					typeDescrioption: 2,
					descrioptionTitle: 'We offer two levels of Managed Contests. Standard ($1499) and Enterprise ($2999). The Enterprise managed contest includes:',
					descrioptionItems: [
						{
							itemTextStart: '(1) a $500 award amount (instead of $300), which will attract our top Creatives and provide more options to choose from',
							linkWord: null,
							linkTo: null,
							itemTextEnd: '',
						},
						{
							itemTextStart: '(2) we will ensure a senior member of our branding team is assigned to your project and the branding team will invest about 3X more time in the day-to-day management of your project;',
							linkWord: null,
							linkTo: null,
							itemTextEnd: '',
						},
						{
							itemTextStart: '(3) you will receive more high-end trademark report and 5X more responses for your audience test.',
							linkWord: null,
							linkTo: null,
							itemTextEnd: '',
						},
						{
							itemTextStart: 'Here is a link to our ',
							linkWord: 'Pricing Page',
							linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
							itemTextEnd: ' with a detailed comparison of the two packages.',
						},
					],
				},
				{
					itemsTitle: 'Where are the Branding Consultants located?',
					typeDescrioption: 1,
					descrioption: 'All our branding consultants are based in in our Headquarters (Hoffman Estates, IL). Our branding consultants have many years of experience in managing hundreds of branding projects for companies ranging from early stage startups to Fortune 500 corporations.',
				},
			],
		},
		{
			title: 'For Creatives',
			link: 'creatives',
			items: [
				{
					itemsTitle: 'Can anyone join your platform?',
					typeDescrioption: 3,
					itemTextStart: "We are open to anyone to signup. However, we have an extensive \"",
					linkWord: 'Quality Scoring',
					linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
					itemTextEnd: '" process which ensures that high quality creatives have the ability to continue to participate in the platform. On the other hand, we limit the participation from those creatives who do not consistently receive high ratings.',
				},
				{
					itemsTitle: 'Can I start participating immediately upon signing up?',
					typeDescrioption: 1,
					descrioption: 'When you initially signup, you are assigned few contests to assess your overall quality of submissions. Based upon the quality of your submissions, you will continue to be assigned additional contests. Once you have received enough high ratings on your submissions, your account will be upgraded to "Full Access", so that you can begin participating in all open contests.',
				},
				{
					itemsTitle: 'How Do I Get Paid?',
					typeDescrioption: 1,
					descrioption: 'We handle creative payouts via Paypal or Payoneer. Depending upon your country of residence, we may require additional documentation to verify your identity as well as your Tax status.',
				},
			],
		},
	],
	READY_TO_GET_STARTED: {
		imageLeft: { imageName: 'abstract-shapes-8.svg', alt: 'abstract-shapes-8', },
		imageRight: { imageName: 'abstract-shapes-5.svg', alt: 'abstract-shapes-5', },
		title: 'Ready to get started?',
		text: 'Fill out your contest brief and begin receiving custom name suggestions within minutes.',

	},
	STATISTIC_BLOCK: [
		{
			icon: { imageName: 'stars.svg', alt: 'stars' },
			statisticText: [
				{ type: 'bold', text: '4.9 out of 5 stars', br: false },
				{ type: 'normal', text: 'from 25,000+ customers.', br: false },
			],
		},
		{
			icon: { imageName: 'img2(1).png', alt: 'img2(1)' },
			statisticText: [
				{ type: 'normal', text: 'Our branding community stands', br: false },
				{ type: 'bold', text: '200,000+', br: false },
				{ type: 'normal', text: 'strong.', br: false },

			],
		},
		{
			icon: { imageName: 'sharing-files.svg', alt: 'sharing-files' },
			statisticText: [
				{ type: 'bold', text: '140+ Industries', br: false },
				{ type: 'normal', text: 'supported across more than', br: false },
				{ type: 'bold', text: '85 countries', br: true },
				{ type: 'normal', text: '– and counting.', br: false },
			],
		},
	],
	PRICING_BOX: {
		infoWhiteBox: [
			{
				itemsTitle: 'Pay a Fraction of cost vs hiring an agency',
				itemTextStart: 'For as low as $199, our naming contests and marketplace allow you to get an amazing brand quickly and affordably.',
				linkWord: '',
				linkTo: '',
				itemTextEnd: ' ',
			},
			{
				itemsTitle: 'Satisfaction Guarantee',
				itemTextStart: 'Of course! We have policies in place to ensure that you are satisfied with your experience. ',
				linkWord: 'Learn more',
				linkTo: '',
				itemTextEnd: '',
			},
		],
		infoWhiteBoxModal: {
			title: 'We Stand By Our Process.',
			text: 'If you are not satisfied receive',
			step: 3,
			modaItems: [
				{
					icon: 'FaHeart',
					itemTextStart: 'Complimentary extension of your contest timeline. ',
					linkWord: '',
					linkTo: '',
					itemTextEnd: '',
				},
				{
					icon: 'FaSmile',
					itemTextStart: 'Complimentary consultation with a Squadhelp branding consultant. ',
					linkWord: '',
					linkTo: '',
					itemTextEnd: '',
				},
				{
					icon: 'FaStudiovinari',
					itemTextStart: 'Apply your contest award toward the purchase of any premium name from our Marketplace. ',
					linkWord: '',
					linkTo: '',
					itemTextEnd: '',
				},
				{
					icon: 'FaSteamSymbol',
					itemTextStart: 'Partial refund for Gold and Platinum packages. ',
					linkWord: 'Read more.',
					linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
					itemTextEnd: '',
				},
				{
					icon: 'FaTableTennis',
					itemTextStart: 'No-questions-asked refund within 10 days for any marketplace domains purchased. ',
					linkWord: 'Read more.',
					linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
					itemTextEnd: '',
				},
			]
		},
		infoBlueBox: {
			title: 'Questions?',
			text: 'Speak with a Squadhelp platform expert to learn more and get your questions answered.',
			titleButton: 'Schedule Consultation',
			linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
			phone: {
				image: 'phone_icon.svg',
				title: '(877) 355-3585',
			},
			textPhone: 'Call us for assistance'
		},
	},
	CLIENTS_BOX: [
		{
			image: 'forbes.svg',
			alt: 'forbes',
			linkTo: 'https://www.forbes.com/sites/forbestreptalks/2016/07/11/not-sure-how-to-name-a-startup-squadhelp-will-crowdsource-it-for-199'
		},
		{
			image: 'TNW.svg',
			alt: 'tnw',
			linkTo: 'https://thenextweb.com/contributors/crowdsource-startup-name-with-squadhelp/'
		},
		{
			image: 'chicago.svg',
			alt: 'chicago',
			linkTo: 'http://www.chicagotribune.com/bluesky/originals/ct-squadhelp-startup-names-bsi-20170331-story.html'
		},
		{
			image: 'Mashable.svg',
			alt: 'mashable',
			linkTo: 'https://mashable.com/2011/04/01/make-money-crowdworking/'
		},
	],
}