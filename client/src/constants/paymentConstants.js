export const PAYMENT_CONSTANTS = {
	PRICE: 100,
	TEXT_LINK_PROMO_CODE: 'Have a promo code?',
	PAY_INPUT_DATA: {
		bigInput: [
			{ title: 'Card Number', name: 'number', mask: '9999 9999 9999 9999', type: 'text', label: 'card number' },
			{ title: 'Name', name: 'name', mask: '', type: 'text', label: 'name' },],
		smallInput: [
			{ title: '* Expires', name: 'expiry', mask: '99/99', type: 'text', label: 'expiry' },
			{ title: '* Security Code', name: 'cvc', mask: '999', type: 'password', label: 'cvc' },
		],
	},
}
