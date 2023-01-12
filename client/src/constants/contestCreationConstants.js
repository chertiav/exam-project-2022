import { APP_CONSTANTS } from '../constants';

export const CREATION_CONTEST = {
	HEADER_TEXT: 'Tell us a bit more about your business as well as your preferences so that creatives get a better idea about what you are looking for',
	VARIABLE_OPTIONNS: {
		[APP_CONSTANTS.NAME_CONTEST]: { styleName: '', typeOfName: '' },
		[APP_CONSTANTS.LOGO_CONTEST]: { nameVenture: '', brandStyle: '' },
		[APP_CONSTANTS.TAGLINE_CONTEST]: { nameVenture: '', typeOfTagline: '' },
	},
	FORM_INPUT_TITLE: 'Title of contest',
	DATA_TEXT_AREA: [
		{
			title: 'What does your company / business do?',
			name: 'focusOfWork',
			type: 'text',
			label: 'e.g. We`re an online lifestyle brand that provides stylish and high quality apparel to the expert eco-conscious shopper'
		},
		{
			title: 'Tell us about your customers',
			name: 'targetCustomer',
			type: 'text',
			label: 'customers'
		},
	],
	ACCEPT_FORMAT_FILE: [
		'application/msword',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		'application/vnd.ms-powerpoint',
		'application/vnd.openxmlformats-officedocument.presentationml.presentation',
		'application/pdf'
	],
	TEXT_FORMAT_FILE: ['doc', 'docx', 'ppt', 'pptx', 'pdf'],
}