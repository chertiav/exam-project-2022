import ACTIONS_TYPES from '../actions/actionsTypes';

//payment

export const getCashOutActions = (payload) => ({
	type: ACTIONS_TYPES.CASHOUT_ACTION,
	payload,
});
export const getPaymentActions = (payload) => ({
	type: ACTIONS_TYPES.PAYMENT_ACTION,
	data: payload.data,
	navigate: payload.navigate,
});
export const getPaymentRequest = () => ({
	type: ACTIONS_TYPES.PAYMENT_REQUEST,
});
export const getPaymentError = (payload) => ({
	type: ACTIONS_TYPES.PAYMENT_ERROR,
	payload
});
export const clearPaymentError = () => ({
	type: ACTIONS_TYPES.PAYMENT_CLEAR_ERROR,
});
export const changeFocusOnCard = (payload) => ({
	type: ACTIONS_TYPES.CHANGE_FOCUS_ON_CARD,
	payload,
});
export const clearPaymentStore = () => ({
	type: ACTIONS_TYPES.CLEAR_PAYMENT_STORE,
});

