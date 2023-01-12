import { APP_CONSTANTS } from './appConstants';

export const REGISTRATION_CONSTANTS = {
	TITLE_FORM: 'CREATE AN ACCOUNT',
	DESCRIPTION_FORM: 'We always keep your name and email address private.',
	FORM_ININTIAL_VALUES: {
		firstName: '',
		lastName: '',
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
		role: APP_CONSTANTS.CUSTOMER,
		agreeOfTerms: false,
	},
	FORM_INPUT_DATA: [
		[
			{ name: 'firstName', type: 'text', label: 'First name' },
			{ name: 'lastName', type: 'text', label: 'Last name' },
		],
		[
			{ name: 'displayName', type: 'text', label: 'Display name' },
			{ name: 'email', type: 'text', label: 'Email address' },
		],
		[
			{ name: 'password', type: 'password', label: 'Password' },
			{ name: 'confirmPassword', type: 'password', label: 'Password confirmation' },
		],
	],
	FORM_ROLE_DATA: [
		{
			name: 'role',
			type: 'radio',
			value: APP_CONSTANTS.CUSTOMER,
			strRole: 'Join As a Buyer',
			infoRole: 'I am looking for a Name, Logo or Tagline for my business, brand or product.',
			id: APP_CONSTANTS.CUSTOMER
		},
		{
			name: 'role',
			type: 'radio',
			value: APP_CONSTANTS.CREATOR,
			strRole: 'Join As a Creative',
			infoRole: 'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.',
			id: APP_CONSTANTS.CREATOR
		}
	],
	FORM_SERVICE_INPUT_DATA: [
		{
			title: 'By clicking this checkbox, you agree to our',
			linkTo: APP_CONSTANTS.PATH_NOTN_FOUND,
			linkTitle: 'Terms of Service.',
			name: 'agreeOfTerms',
			type: 'checkbox',
			id: 'termsOfService'
		},
	],

};