import ACTIONS_TYPES from '../actions/actionsTypes';

const initialState = {
	isFetching: false,
	error: null,
	focusOnElement: 'number',
};

const payReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTIONS_TYPES.CHANGE_FOCUS_ON_CARD:
			return {
				...state,
				focusOnElement: payload,
			};
		case ACTIONS_TYPES.PAYMENT_REQUEST:
			return {
				...state,
				isFetching: true,
				error: null,
			};
		case ACTIONS_TYPES.PAYMENT_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			};
		case ACTIONS_TYPES.PAYMENT_CLEAR_ERROR:
			return {
				...state,
				focusOnElement: 'number',
				error: null,
			};
		case ACTIONS_TYPES.CLEAR_PAYMENT_STORE:
			return initialState;
		default:
			return state;
	}
}

export default payReducer;
